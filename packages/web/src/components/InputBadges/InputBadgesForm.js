import React, {
  forwardRef,
  useCallback
} from 'react'

import PropTypes from 'prop-types'

import {
  FieldProvider,
  useField
} from '@idea/forms'

import InputBadgesStyled from './InputBadgesStyled'

const InputBadgesForm = (props) => {
  const {
    setValue,
    readOnly,
    ...rest
  } = props

  const { fieldRef, error } = useField()

  const handleChange = useCallback(
    (val) => !readOnly && setValue(val),
    [readOnly, setValue]
  )

  return (
    <InputBadgesStyled
      ref={ fieldRef }
      { ...rest }
      onChange={ handleChange }
      error={ error }
    />
  )
}

InputBadgesForm.propTypes = {
  setValue: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

InputBadgesForm.defaultProps = { readOnly: false }

const Field = forwardRef(({ path, ...props }, ref) => (
  <FieldProvider
    ref={ ref }
    { ...props }
    registerFieldOptions={ { path } }
    FieldComponent={ InputBadgesForm }
  />
))

Field.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
  onBlur: PropTypes.func,
  path: PropTypes.string,
  defaultValue: PropTypes.any,
  helperText: PropTypes.string,
  validateOnBlur: PropTypes.bool
}

Field.defaultProps = {
  disabled: false,
  onChange () {},
  onValueChange () {},
  onBlur () {},
  path: 'value',
  defaultValue: [],
  helperText: null,
  validateOnBlur: true
}

export default Field
