import { useCallback } from 'react'

import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import cnhMask from '@idea/forms/masks/cnh.mask'
import cpfCnpjMask from '@idea/forms/masks/cpfCnpj.mask'
import nisMask from '@idea/forms/masks/nis.mask'
import rgMask from '@idea/forms/masks/rg.mask'
import { documentIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputDocumentNumber = ({ documentType, ...props }) => {
  const setMask = useCallback(
    (value) => {
      switch (documentType) {
        case 1: return cpfCnpjMask(value, { mode: 'cpf' })
        case 2: return rgMask()
        case 3: return nisMask()
        case 4: return cnhMask()
        default: return '99999999999'
      }
    },
    [documentType]
  )

  return (
    <TextField
      { ...props }
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

InputDocumentNumber.propTypes = { documentType: PropTypes.oneOf(['', 0, 1, 2, 3, 4, 5]) }
InputDocumentNumber.defaultProps = { documentType: null }

export default InputDocumentNumber
