import React, {
  forwardRef,
  useMemo
} from 'react'

import PropTypes from 'prop-types'

import InputBadgesForm from './InputBadgesForm'
import InputBadgesStyled from './InputBadgesStyled'

const InputBadges = forwardRef((props, ref) => {
  const {
    detached,
    ...rest
  } = props

  const Input = useMemo(
    () => detached ? InputBadgesStyled : InputBadgesForm,
    [detached]
  )

  return (
    <Input ref={ ref } { ...rest }/>
  )
})

InputBadges.propTypes = {
  detached: PropTypes.bool,
  value: PropTypes.any
}

InputBadges.defaultProps = {
  detached: false,
  value: []
}

export default InputBadges
