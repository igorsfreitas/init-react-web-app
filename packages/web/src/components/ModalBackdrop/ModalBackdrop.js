import React from 'react'

import PropTypes from 'prop-types'

import Backdrop from '@material-ui/core/Backdrop'

import useStyles from './styles'

const ModalBackdrop = (props) => {
  const {
    open,
    handleClose,
    children
  } = props

  const classes = useStyles()

  return (
    <Backdrop className={ classes.backdrop } open={ open } onClick={ handleClose }>
      {children}
    </Backdrop>
  )
}

ModalBackdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.any
}
ModalBackdrop.defaultProps = { children: null }

export default ModalBackdrop
