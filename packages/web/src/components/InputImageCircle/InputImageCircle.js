import React, {
  forwardRef,
  useMemo
} from 'react'

import PropTypes from 'prop-types'

import InputImageCircleForm from './InputImageCircleForm'
import InputImageCircleStyled from './InputImageCircleStyled'

const InputImageCircle = forwardRef((props, ref) => {
  const { detached, ...rest } = props

  const Input = useMemo(
    () => detached ? InputImageCircleStyled : InputImageCircleForm,
    [detached]
  )

  return (
    <Input ref={ ref } { ...rest }/>
  )
})

InputImageCircle.propTypes = {
  detached: PropTypes.bool,
  value: PropTypes.string
}

InputImageCircle.defaultProps = {
  detached: false,
  value: ''
}

export default InputImageCircle
