import React, {
  forwardRef,
  useCallback
} from 'react'

import PropTypes from 'prop-types'

import {
  FieldProvider,
  useField
} from '@idea/forms'

import StatusSwitchStyled from './SwitchStatusStyled'

const StatusSwitchForm = (props) => {
  const {
    setValue,
    readOnly,
    ...rest
  } = props

  const { fieldRef } = useField()

  const handleChange = useCallback(
    (event) => !readOnly && setValue(event.target.checked),
    [readOnly, setValue]
  )

  return (
    <StatusSwitchStyled
      ref={ fieldRef }
      { ...rest }
      readOnly={ readOnly }
      onChange={ handleChange }
    />
  )
}

StatusSwitchForm.propTypes = {
  setValue: PropTypes.func.isRequired,
  readOnly: PropTypes.bool
}

StatusSwitchForm.defaultProps = { readOnly: false }

const Field = forwardRef(({ path, ...props }, ref) => (
  <FieldProvider
    ref={ ref }
    { ...props }
    registerFieldOptions={ { path } }
    FieldComponent={ StatusSwitchForm }
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
