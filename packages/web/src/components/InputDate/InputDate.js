import React, {
  useCallback,
  useMemo,
  useRef,
  useState
} from 'react'

import moment from 'moment/moment'
import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import dateMask from '@idea/forms/masks/date.mask.js'
import { calendarIcon } from '@idea/icons'
import colors from '@idea/styles/colors'
import {
  dateBackFormat,
  dateFriendlyFormat
} from '@idea/utils/date'

import CalendarPicker from '~/components/CalendarPicker'
import Icon from '~/components/Icon'
import TextField from '~/components/TextField'

const InputDate = (props) => {
  const {
    value,
    onChange,
    onClick,
    adornmentStyle,
    pickerProps,
    min,
    max,
    onValueChange,
    ...rest
  } = props

  const { detached, disabled } = rest

  const [calendarValue, setCalendarValue] = useState(value)

  const inputRef = useRef()

  const date = useMemo(
    () => detached ? value : calendarValue,
    [calendarValue, detached, value]
  )

  const calendarOptions = useMemo(
    () => ({ mode: 'single' }),
    []
  )

  const transformRender = useCallback(
    (newDate) => {
      const newMoment = moment(newDate, dateBackFormat, true)
      if (newMoment.isValid()) {
        return newMoment.format(dateFriendlyFormat)
      }
      return newMoment._i
    },
    []
  )

  const transformValue = useCallback(
    (newDate) => {
      const newMoment = moment(newDate, dateFriendlyFormat, true)
      if (newMoment.isValid()) {
        return newMoment.format(dateBackFormat)
      }
      return newMoment._i
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

  // only use it inside a form
  const handleFieldChange = useCallback(
    (newDate) => {
      if (!detached) {
        if (moment(newDate, dateBackFormat, true).isValid()) {
          setCalendarValue(newDate)
        } else {
          setCalendarValue('')
        }
      }
      onValueChange(newDate)
    },
    [detached, onValueChange]
  )

  const handleCalendarChange = useCallback(
    (newDate) => {
      if (!detached && inputRef.current.setValue) {
        inputRef.current.setValue(newDate)
      }
      onChange(newDate)
    },
    [detached, onChange]
  )

  if (detached) {
    rest.value = date
    rest.onChange = handleInputChange
  } else {
    rest.transformValue = transformValue
    rest.onValueChange = handleFieldChange
  }

  return (
    <CalendarPicker
      value={ date }
      onChange={ handleCalendarChange }
      options={ calendarOptions }
      minDate={ min }
      maxDate={ max }
      disabled={ disabled }
      { ...pickerProps }
    >
      <TextField
        InputLabelProps={ { required: false } }
        data-input
        ref={ inputRef }
        { ...rest }
        setMask={ dateMask }
        validateOnBlur={ false }
        type="tel"
        autoComplete="off"
        transformRender={ transformRender }
        InputProps={ {
          startAdornment: (
            <InputAdornment style={ adornmentStyle } position="start">
              <div
                onClick={ onClick }
                data-toggle
              >
                <Icon
                  icon={ calendarIcon }
                  size={ 24 }
                  color={ colors.secondary.main }
                />
              </div>
            </InputAdornment>
          )
        } }
      />
    </CalendarPicker>
  )
}

InputDate.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onValueChange: PropTypes.func,
  adornmentStyle: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  pickerProps: PropTypes.object,
  min: PropTypes.string,
  max: PropTypes.string
}

InputDate.defaultProps = {
  value: '',
  onChange () {},
  onValueChange () {},
  adornmentStyle: {},
  onClick () {},
  disabled: false,
  pickerProps: {},
  min: undefined,
  max: undefined
}

export default InputDate
