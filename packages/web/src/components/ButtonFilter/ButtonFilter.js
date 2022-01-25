import React from 'react'

import PropTypes from 'prop-types'

import { ToggleButton } from '@material-ui/lab'

import './styles.css'
const ButtonFilter = (props, value) => (
  <ToggleButton disableElevation variant="outlined" className="button"
    value= { value.props }
    { ...props }
  />
)

ButtonFilter.propTypes = { value: PropTypes.string }

ButtonFilter.defaultProps = { value: 'todos' }

export default ButtonFilter
