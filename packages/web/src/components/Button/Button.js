import React from 'react'

import PropTypes from 'prop-types'

import MuiButton from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Wrapper } from './styles'

const Button = ({
  children,
  color,
  isLoading,
  disabled,
  ...props
}) => {
  const colorProp =
    ['default', 'inherit', 'primary', 'secondary'].indexOf(color) > -1
      ? (color)
      : undefined

  return (
    <Wrapper>
      <MuiButton
        disabled={ isLoading || disabled }
        { ...props }
        color={ colorProp }
      >
        {children}
      </MuiButton>
      {isLoading && <CircularProgress size={ 24 } />}
    </Wrapper>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'contained', 'text']),
  color: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.any
}

Button.defaultProps = {
  className: null,
  variant: 'contained',
  color: 'default',
  children: null,
  isLoading: false,
  disabled: false
}

export default Button
