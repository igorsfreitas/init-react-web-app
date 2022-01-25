import React, { useState } from 'react'

import { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import { keyIcon } from '@idea/icons'
import colors from '@idea/styles/colors'

import Icon from '~/components/Icon'
import EyeClosedIconButton from '~/components/IconButton/EyeClosedIconButton'
import ViewIconButton from '~/components/IconButton/ViewIconButton'
import TextField from '~/components/TextField'

const InputPassword = ({
  size,
  InputProps,
  acceptSpecialCharacters,
  ...props
}) => {
  const t = useT()

  const [passwordMasked, setPasswordMasked] = useState(true)

  const EyeIconButton = passwordMasked ? ViewIconButton : EyeClosedIconButton

  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const onChange = (e) => {
    const newValue = e.target.value

    if (!acceptSpecialCharacters) {
      if (!newValue.match(/[%<>\\$'@#$&*¨"]/)) {
        setError('')
      } else {
        setError("Caracteres não permitidos: %<>\\$'@#$&*¨")
      }
    }

    setName(newValue)
  }

  return (
    <TextField
      size={ size }
      { ...props }
      value= { name }
      onChange= { onChange }
      helperText= { error }
      error= { !!error }
      InputLabelProps={ { required: false } }
      InputProps={ {
        ...InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <Icon icon={ keyIcon } size={ 24 } />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <EyeIconButton
              size={ size }
              onClick={ () => setPasswordMasked((old) => !old) }
              style={ { color: colors.primary } }
              tooltip={ passwordMasked ? t('show') : t('hide') }
            />
          </InputAdornment>
        )
      } }
      type={ passwordMasked ? 'password' : 'text' }
    />
  )
}

InputPassword.propTypes = {
  size: PropTypes.oneOf(['small', 'medium']),
  InputProps: PropTypes.object,
  acceptSpecialCharacters: PropTypes.bool
}

InputPassword.defaultProps = {
  size: 'small',
  InputProps: {},
  acceptSpecialCharacters: false
}

export default InputPassword
