import React, { useCallback } from 'react'

import moment from 'moment/moment'
import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import dayMonthMask from '@idea/forms/masks/dayMonth.mask.js'
import colors from '@idea/styles/colors'
import {
  leapYear,
  dateBackFormat,
  dateFriendlyFormat,
  monthDayBackFormat,
  monthDayFriendlyFormat
} from '@idea/utils/date'

import CalendarIcon from '~/components/icons/CalendarIcon'
import TextField from '~/components/TextField'

const InputDayMonth = (props) => {
  const {
    value,
    onChange,
    onClick,
    adornmentStyle,
    ...rest
  } = props

  const { detached } = rest

  const transformRender = useCallback(
    (newDate) => {
      const newMoment = moment(`${ leapYear }-${ newDate }`, dateBackFormat, true)
      if (newMoment.isValid()) {
        return newMoment.format(monthDayFriendlyFormat)
      }
      return newDate
    },
    []
  )

  const transformValue = useCallback(
    (newDate) => {
      const newMoment = moment(`${ newDate }/${ leapYear }`, dateFriendlyFormat, true)
      if (newMoment.isValid()) {
        return newMoment.format(monthDayBackFormat)
      }
      return newDate
    },
    []
  )

  // only use it outside a form
  const handleInputChange = useCallback(
    ({ target: { value: newDate } }) => {
      onChange(transformValue(newDate))
    },
    [onChange, transformValue]
  )

  if (detached) {
    rest.value = value
    rest.onChange = handleInputChange
  } else {
    rest.transformValue = transformValue
    rest.transformRender = transformRender
  }

  return (
    <TextField
      { ...rest }
      type="tel"
      setMask={ dayMonthMask }
      InputProps={ {
        endAdornment: (
          <InputAdornment style={ adornmentStyle } position="end">
            <CalendarIcon
              size={ 20 }
              color={ colors.secondary.main }
              onClick={ onClick }
              data-toggle
            />
          </InputAdornment>
        )
      } }
    />
  )
}

InputDayMonth.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  adornmentStyle: PropTypes.object
}

InputDayMonth.defaultProps = {
  value: '',
  onChange () {},
  onClick () {},
  adornmentStyle: {}
}

export default InputDayMonth
