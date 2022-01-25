import React, {
  forwardRef,
  useMemo
} from 'react'

import PropTypes from 'prop-types'

import InputQuantityForm from './InputQuantityForm'
import InputQuantityStyled from './InputQuantityStyled'

const InputQuantity = forwardRef((props, ref) => {
  const { detached, ...rest } = props

  const Input = useMemo(
    () => detached ? InputQuantityStyled : InputQuantityForm,
    [detached]
  )

  return (
    <Input ref={ ref } { ...rest }/>
  )
})

InputQuantity.propTypes = {
  detached: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

InputQuantity.defaultProps = {
  detached: false,
  value: ''
}

export default InputQuantity
