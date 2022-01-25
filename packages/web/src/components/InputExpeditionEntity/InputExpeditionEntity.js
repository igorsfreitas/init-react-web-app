import React from 'react'

import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import { documentIcon } from '@idea/icons'

// import colors from '@idea/styles/colors'
import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputExpeditionEntity = ({
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
          <Icon icon={ documentIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
    type="text"
  />
)

InputExpeditionEntity.propTypes = { InputProps: PropTypes.object }

InputExpeditionEntity.defaultProps = { InputProps: {} }

export default InputExpeditionEntity
