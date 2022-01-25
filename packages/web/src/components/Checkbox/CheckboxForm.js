import React, {
  forwardRef,
  useCallback
} from 'react'

import PropTypes from 'prop-types'

import {
  FieldProvider,
  useField
} from '@idea/forms'

import CheckboxStyled from './CheckboxStyled'

const CheckboxForm = (props) => {
  const {
    setValue,
    readOnly,
    ...rest
  } = props

  const { error, required } = useField()

  const handleChange = useCallback(
    (event) => !readOnly && setValue(event.target.checked),
    [readOnly, setValue]
  )

  return (
    <CheckboxStyled
      { ...rest }
      readOnly={ readOnly }
      onChange={ handleChange }
      error={ error }
      required={ required }
    />
  )
}

CheckboxForm.propTypes = {
  setValue: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

CheckboxForm.defaultProps = { readOnly: false }

const Field = forwardRef(({ path, ...props }, ref) => (
  <FieldProvider
    ref={ ref }
    { ...props }
    registerFieldOptions={ { path } }
    FieldComponent={ CheckboxForm }
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
