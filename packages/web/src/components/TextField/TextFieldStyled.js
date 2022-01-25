import React, {
  useMemo,
  useCallback,
  forwardRef
} from 'react'
import MaskedInput from 'react-input-mask'
import NumberFormat from 'react-number-format'

import PropTypes from 'prop-types'
import uuid from 'short-uuid'

import toNumber from 'lodash/toNumber'

import Box from '@material-ui/core/Box'
import InfoIcon from '@material-ui/icons/Info'

import { TextFieldStyled as MuiTextFieldStyled } from './styles'

const TextFieldStyled = forwardRef((props, inputRef) => {
  const {
    id,
    numberFormatProps,
    mask,
    value,
    onChange,
    onKeyDown,
    onBlur,
    required,
    disabled,
    error,
    helperText: externalHelperText,
    setMask,
    transformRender,
    minWidth,
    notEditable,
    readOnly,
    type,
    placeholder,
    ...rest
  } = props

  const inputId = useMemo(
    () => id || uuid().new(),
    [id]
  )

  const handleChange = useCallback(
    (event) => {
      if (!notEditable) {
        if (numberFormatProps) {
          return onChange({ target: { value: event.value } })
        }
        return onChange(event)
      }
      return undefined
    },
    [notEditable, numberFormatProps, onChange]
  )

  const helperText = useMemo(
    () => (error || externalHelperText) && (
      <Box component="span" display="flex" alignItems="center">
        <InfoIcon fontSize="small" style={ { marginRight: '8px' } } />
        {' '}{ error || externalHelperText }
      </Box>
    ),
    [error, externalHelperText]
  )

  const textFieldProps = useMemo(
    () => ({
      inputRef,
      id: inputId,
      required,
      minWidth,
      error: !!error,
      helperText,
      disabled,
      readOnly,
      type,
      InputLabelProps: placeholder ? { shrink: true } : {},
      placeholder,
      ...rest
    }),
    [inputRef, inputId, required, minWidth, error, helperText, disabled, readOnly, type, placeholder, rest]
  )

  const transformedValue = useMemo(
    () => transformRender(type === 'tel' ? value.toString() : value),
    [transformRender, type, value]
  )

  return (
    <>
      { numberFormatProps ? (
        <NumberFormat
          value={ transformedValue ? toNumber(transformedValue) : null }
          onValueChange={ handleChange }
          onBlur={ onBlur }
          onKeyDown={ onKeyDown }
          customInput={ MuiTextFieldStyled }
          { ...numberFormatProps }
          { ...textFieldProps }
        />
      ) : (
        <>
          {(textFieldProps.multiline || !mask) ? (
            <MuiTextFieldStyled
              { ...textFieldProps }
              value={ transformedValue }
              onChange={ handleChange }
              onBlur={ onBlur }
              onKeyDown={ onKeyDown }
              disabled={ disabled }
              readOnly={ readOnly }
            />
          ) : (
            <MaskedInput
              mask={ mask }
              onChange={ handleChange }
              value={ transformedValue }
              onBlur={ onBlur }
              onKeyDown={ onKeyDown }
              maskPlaceholder={ null }
              disabled={ disabled }
              readOnly={ readOnly }
            >
              <MuiTextFieldStyled
                { ...textFieldProps }
                value={ transformedValue }
              />
            </MaskedInput>
          )}
        </>
      ) }
    </>
  )
})

TextFieldStyled.propTypes = {
  id: PropTypes.string,
  numberFormatProps: PropTypes.object,
  mask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  value: PropTypes.any,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  setMask: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  helperText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.object
  ]),
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  transformRender: PropTypes.func,
  minWidth: PropTypes.number,
  notEditable: PropTypes.bool,
  readOnly: PropTypes.bool
}

TextFieldStyled.defaultProps = {
  id: undefined,
  numberFormatProps: undefined,
  mask: undefined,
  onBlur () {},
  onKeyDown () {},
  setMask: undefined,
  required: false,
  error: null,
  disabled: false,
  helperText: null,
  type: 'text',
  variant: 'standard',
  size: 'medium',
  value: '',
  onChange () {},
  transformRender: (v) => v,
  minWidth: 0,
  notEditable: false,
  readOnly: false,
  placeholder: ''
}

export default TextFieldStyled
