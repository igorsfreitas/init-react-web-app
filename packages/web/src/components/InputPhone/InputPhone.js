import React from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'

import cellPhoneMask from '@idea/forms/masks/cellphone.mask'
import { phoneIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputPhone = (props) => (
  <TextField
    { ...props }
    type="tel"
    setMask={ cellPhoneMask }
    InputProps={ {
      startAdornment: (
        <InputAdornment position="start">
          <Icon icon={ phoneIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

export default InputPhone
