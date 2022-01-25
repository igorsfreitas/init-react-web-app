import React, {
  forwardRef,
  useMemo
} from 'react'

import PropTypes from 'prop-types'

import InputImageForm from './InputImageForm'
import InputImageStyled from './InputImageStyled'

const InputImage = forwardRef((props, ref) => {
  const { detached, ...rest } = props

  const Input = useMemo(
    () => detached ? InputImageStyled : InputImageForm,
    [detached]
  )

  return (
    <Input ref={ ref } { ...rest }/>
  )
})

InputImage.propTypes = {
  detached: PropTypes.bool,
  value: PropTypes.string
}

InputImage.defaultProps = {
  detached: false,
  value: ''
}

export default InputImage
