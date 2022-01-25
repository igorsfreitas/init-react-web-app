import React from 'react'

import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import hourMask from '@idea/forms/masks/hour.mask'
import { clockIcon } from '@idea/icons'
import colors from '@idea/styles/colors'

import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputHour = (props) => {
  const { mask, ...rest } = props
  return (

    <TextField
      setMask={ mask }
      { ...rest }
      type="tel"
      InputProps={ {
        startAdornment: (
          <InputAdornment position="start">
            <div
              data-toggle
            >
              <Icon
                icon={ clockIcon }
                size={ 24 }
                color={ colors.secondary.main }
              />
            </div>
          </InputAdornment>
        )
      } }
    />

  )
}

InputHour.propTypes = {
  /** Defines mask characters's limit  */
  maxLength: PropTypes.number,
  mask: PropTypes.func
}

InputHour.defaultProps = {
  maxLength: 4,
  mask: hourMask
}

export default InputHour
