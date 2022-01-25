import React, { useCallback } from 'react'

import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import cpfCnpjMask from '@idea/forms/masks/cpfCnpj.mask'
import { documentIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputCpfCnpj = ({ mode, ...props }) => {
  const setMask = useCallback(
    (value) => cpfCnpjMask(value, { mode }),
    [mode]
  )

  return (
    <TextField
      { ...props }
      type="tel"
      setMask={ setMask }
      InputProps={ {
        startAdornment: (
          <InputAdornment position="start">
            <Icon icon={ documentIcon } size={ 24 } />
          </InputAdornment>
        )
      } }
    />
  )
}

InputCpfCnpj.propTypes = { mode: PropTypes.oneOf(['cpf', 'cnpj', 'both']) }

InputCpfCnpj.defaultProps = { mode: 'both' }

export default InputCpfCnpj
