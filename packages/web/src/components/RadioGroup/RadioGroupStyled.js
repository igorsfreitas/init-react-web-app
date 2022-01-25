import {
  useMemo,
  useCallback
} from 'react'

import clsx from 'clsx'
import PropTypes from 'prop-types'

import find from 'lodash/find'
import isBoolean from 'lodash/isBoolean'

import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import MuiRadioGroup from '@material-ui/core/RadioGroup'
import InfoIcon from '@material-ui/icons/Info'

import useStyles, { Label } from './styles'

const RadioGroup = (props) => {
  const {
    name,
    value,
    onChange,
    label,
    disabled,
    options,
    valueKey,
    idKey,
    error,
    clearable,
    required,
    showAsteriskLabel,
    ...rest
  } = props

  const classes = useStyles()

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

  const handleChange = useCallback((event) => {
    if (isBoolean(event.target.checked)) {
      let eventValue = event.target.value
      const booleanAsString = eventValue === 'true' || eventValue === 'false'
      if (booleanAsString) {
        eventValue = eventValue === 'true'
      } else {
        // eslint-disable-next-line eqeqeq
        eventValue = find(options, (option) => option[idKey] == event.target.value)?.[idKey]
      }

      if (clearable && value === eventValue) {
        onChange({ ...event, target: { ...event.target, value: booleanAsString ? null : '' } })
      } else {
        onChange({ ...event, target: { ...event.target, value: eventValue } })
      }
    }
  }, [clearable, idKey, onChange, options, value])

  return (
    <FormControl component="fieldset">
      {label && (
        <Label $error={ error }>
          {label}{required && showAsteriskLabel ? ' *' : ''}
        </Label>
      )}
      <MuiRadioGroup
        name={ name }
        value={ value }
        onClick={ handleChange }
        aria-label={ name }
        row
        disabled={ disabled }
        { ...rest }
      >
        {options.map((option) => (
          <FormControlLabel
            key={ option[idKey] }
            value={ option[idKey] }
            label={ option[valueKey] }
            classes={ {
              root: classes.root,
              label: clsx(classes.label, {
                [classes.labelActive]: value === option[idKey],
                [classes.labelInactive]: !value === option[idKey] || value === '' || value === null
              })
            } }
            control={
              <Radio
                color="primary"
                checkedIcon={ <span className={ clsx(classes.icon, classes.checkedIcon) } /> }
                icon={ <span className={ classes.icon } /> }
              />
            }
          />
        ))}
      </MuiRadioGroup>

      {helperText}

    </FormControl>
  )
}

RadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  options: PropTypes.array,
  valueKey: PropTypes.string,
  idKey: PropTypes.string,
  error: PropTypes.string,
  clearable: PropTypes.bool,
  required: PropTypes.bool,
  showAsteriskLabel: PropTypes.bool
}

RadioGroup.defaultProps = {
  value: false,
  onChange () {},
  disabled: false,
  label: null,
  options: [],
  valueKey: 'name',
  idKey: 'id',
  error: null,
  clearable: false,
  required: false,
  showAsteriskLabel: false
}

export default RadioGroup
