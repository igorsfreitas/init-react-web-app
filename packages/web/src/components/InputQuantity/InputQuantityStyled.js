import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback
} from 'react'

import PropTypes from 'prop-types'

import debounce from 'lodash/debounce'

import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import InfoIcon from '@material-ui/icons/Info'

import {
  trashIcon,
  plusIcon,
  minusIcon
} from '@idea/icons'
import colors from '@idea/styles/colors'

import Icon from '~/components/Icon'

import {
  Container,
  Button,
  Input,
  Label
} from './styles'

const InputQuantity = (props) => {
  const {
    min,
    max,
    value,
    onChange,
    disabled,
    deletable,
    onDelete,
    forceDelete,
    leftIconColor,
    rightIconColor,
    readOnly,
    style,
    error,
    label,
    required
  } = props

  const inputRef = useRef(null)

  const customValue = useMemo(
    () => ((value < min) ? min : value) || min,
    [min, value]
  )

  const [inputValue, setInputValue] = useState(customValue)

  const incrementDisabled = useMemo(
    () => !!max && customValue >= max,
    [customValue, max]
  )

  const decreaseDisabled = useMemo(
    () => customValue <= min,
    [customValue, min]
  )

  const onIncrement = useCallback(
    () => {
      if (!incrementDisabled) {
        onChange(customValue + 1)
      }
    },
    [customValue, incrementDisabled, onChange]
  )

  const onDecrease = useCallback(
    () => {
      if (!decreaseDisabled) {
        onChange(customValue - 1)
      }
    },
    [customValue, decreaseDisabled, onChange]
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChangeDebounced = useCallback(
    debounce(
      (newValue, setaFoco) => {
        onChange(newValue)
        if (setaFoco && inputRef.current) {
          inputRef.current.select()
        }
      },
      500
    ),
    []
  )

  const onCustomChange = useCallback(
    (val, setaFoco = true) => {
      let newValue = parseInt(val, 10)

      if (newValue >= min) {
        if (max && newValue > max) {
          newValue = max
        }
      } else {
        newValue = min
      }

      setInputValue(newValue)
      onChangeDebounced(newValue, setaFoco)
    },
    [max, min, onChangeDebounced]
  )

  const onInputChange = useCallback(
    ({ target: { value: iptValue } }) => {
      if (!readOnly) {
        onCustomChange(iptValue)
      }
    },
    [onCustomChange, readOnly]
  )

  const helperText = useMemo(
    () => (error) && (
      <Box component="span" display="flex" alignItems="center" style={ { marginTop: 3 } }>
        <InfoIcon color="error" fontSize="small" style={ { marginRight: '8px' } } />
        {' '}
        <Label $error>
          { error }
        </Label>
      </Box>
    ),
    [error]
  )

  useEffect(() => {
    if (inputValue !== customValue) {
      setInputValue(customValue)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customValue, onCustomChange])

  return (
    <FormControl component="fieldset">
      {label && (
        <Label $error={ error }>
          {label}{required ? ' *' : ''}
        </Label>
      )}
      <Container style={ style }>
        {(deletable && inputValue <= (min || 1)) || forceDelete ? (
          <Button
            onClick={ onDelete }
            disabled={ readOnly || disabled }
          >
            <Icon
              icon={ trashIcon }
              color={ readOnly || disabled ? colors.lightPink2 : leftIconColor }
              size={ 11 }
            />
          </Button>
        ) : (
          <Button
            disabled={ readOnly || disabled || decreaseDisabled }
            onClick={ onDecrease }
          >
            <Icon
              icon={ minusIcon }
              color={ disabled || decreaseDisabled ? colors.lightPink2 : leftIconColor }
              size={ 11 }
            />
          </Button>
        )}
        <Input
          ref={ inputRef }
          type="tel"
          onClick={ (event) => event.target.select() }
          value={ inputValue }
          onChange={ onInputChange }
          disabled={ readOnly || disabled }
        />
        <Button
          disabled={ readOnly || disabled || incrementDisabled }
          onClick={ onIncrement }
        >
          <Icon
            icon={ plusIcon }
            color={ disabled || incrementDisabled ? colors.lightPink2 : rightIconColor }
            size={ 11 }
          />
        </Button>
      </Container>

      {helperText}

    </FormControl>
  )
}

InputQuantity.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  deletable: PropTypes.bool,
  onDelete: PropTypes.func,
  forceDelete: PropTypes.bool,
  leftIconColor: PropTypes.string,
  rightIconColor: PropTypes.string,
  style: PropTypes.object,
  error: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string
}

InputQuantity.defaultProps = {
  min: 0,
  max: null,
  value: null,
  onChange () {},
  disabled: false,
  readOnly: false,
  deletable: false,
  onDelete () {},
  forceDelete: false,
  leftIconColor: colors.darkPink2,
  rightIconColor: colors.darkPink2,
  style: {},
  error: null,
  required: false,
  label: null
}

export default InputQuantity
