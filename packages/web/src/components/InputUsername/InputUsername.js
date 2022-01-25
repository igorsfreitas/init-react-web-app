import React from 'react'

import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import { userIcon } from '@idea/icons'

// import colors from '@idea/styles/colors'
import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputUsername = ({
  InputProps,
  ...props
}) => (
  <TextField
    { ...props }
    InputLabelProps={ { required: false } }
    InputProps={ {
      ...InputProps,
      startAdornment: (
        <InputAdornment position="start">
          <Icon icon={ userIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
    type="text"
  />
)

InputUsername.propTypes = { InputProps: PropTypes.object }

InputUsername.defaultProps = { InputProps: {} }

export default InputUsername
