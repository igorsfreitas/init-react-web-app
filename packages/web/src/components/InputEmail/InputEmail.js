import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'

import { envelopIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputEmail = (props) => (
  <TextField
    { ...props }
    type="email"
    InputProps={ {
      startAdornment: (
        <InputAdornment position="start">
          <Icon icon={ envelopIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

export default InputEmail
