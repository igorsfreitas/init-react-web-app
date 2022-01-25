import React, {
  forwardRef,
  useCallback
} from 'react'

import PropTypes from 'prop-types'

import {
  FieldProvider,
  useField
} from '@idea/forms'

import InputQuantityStyled from './InputQuantityStyled'

const InputQuantityForm = (props) => {
  const {
    setValue,
    readOnly,
    ...rest
  } = props

  const { error, required } = useField()

  const handleChange = useCallback(
    (value) => !readOnly && setValue(value),
    [readOnly, setValue]
  )

  return (
    <InputQuantityStyled
      { ...rest }
      readOnly={ readOnly }
      onChange={ handleChange }
      error={ error }
      required={ required }
    />
  )
}

InputQuantityForm.propTypes = {
  setValue: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

InputQuantityForm.defaultProps = { readOnly: false }

const Field = forwardRef(({ path, ...props }, ref) => (
  <FieldProvider
    ref={ ref }
    { ...props }
    registerFieldOptions={ { path } }
    FieldComponent={ InputQuantityForm }
  />
))

Field.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onValueChange: PropTypes.func,
  path: PropTypes.string,
  defaultValue: PropTypes.any,
  validateOnBlur: PropTypes.bool
}

Field.defaultProps = {
  disabled: false,
  onChange () {},
  onValueChange () {},
  onBlur () {},
  path: 'value',
  defaultValue: false,
  validateOnBlur: true
}

export default Field
