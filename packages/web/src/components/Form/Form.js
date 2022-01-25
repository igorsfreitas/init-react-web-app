import React, { forwardRef } from 'react'

import PropTypes from 'prop-types'

import { StyledForm } from './styles'

const Form = forwardRef((props, formRef) => (
  <StyledForm
    ref={ formRef }
    { ...props }
    noValidate
  >
    {props.children}
  </StyledForm>
))

Form.propTypes = {
  schemaConstructor: PropTypes.func,
  defaultValues: PropTypes.object,
  onSubmit: PropTypes.func,
  children: PropTypes.any
}

Form.defaultProps = {
  schemaConstructor: undefined,
  defaultValues: {},
  onSubmit () {},
  children: null
}

export default Form
