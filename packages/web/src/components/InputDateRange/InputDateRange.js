import React, {
  useRef,
  useCallback,
  useMemo,
  useState
} from 'react'

import moment from 'moment/moment'
import PropTypes from 'prop-types'

import filter from 'lodash/filter'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import size from 'lodash/size'

import InputAdornment from '@material-ui/core/InputAdornment'

import colors from '@idea/styles/colors'
import {
  dateBackFormat,
  dateFriendlyFormat
} from '@idea/utils/date'

import CalendarPicker from '~/components/CalendarPicker'
import CalendarIcon from '~/components/icons/CalendarIcon'
import TextField from '~/components/TextField'

const InputDateRange = (props) => {
  const {
    value,
    onChange,
    onClick,
    adornmentStyle,
    pickerProps,
    onBlur,
    min,
    max,
    defaultValue,
    styles,
    ...rest
  } = props

  const { detached, disabled } = rest

  const [calendarValue, setCalendarValue] = useState(value)

  const inputRef = useRef()

  const dates = useMemo(
    () => filter(detached ? value : calendarValue, (date) => !isEmpty(date)),
    [calendarValue, detached, value]
  )

  const datesObj = useMemo(
    () => {
      const [from = '', to = ''] = dates || []
      return { from, to }
    },
    [dates]
  )

  const transformRender = useCallback(
    (newDates) => {
      const newMomentFrom = moment(newDates.from, dateBackFormat, true)
      const fromStr = newMomentFrom.isValid() ? newMomentFrom.format(dateFriendlyFormat) : newMomentFrom._i

      const newMomentTo = moment(newDates.to, dateBackFormat, true)
      const toStr = newMomentTo.isValid() ? newMomentTo.format(dateFriendlyFormat) : newMomentTo._i

      if (!newDates.to || fromStr === toStr) {
        return fromStr
      }
      return `${ fromStr } - ${ toStr }`
    },
    []
  )

  // only use it outside a form
  const handleInputChange = useCallback(
    () => {},
    []
  )

  const handleChangeDates = useCallback(
    (newDates) => {
      if (!detached && inputRef.current.setValue) {
        inputRef.current.setValue(newDates)
      }
      onChange(newDates)
      setCalendarValue(newDates)
    },
    [detached, onChange]
  )

  // only use it inside a form
  const handleFieldChange = useCallback(
    (newDates) => {
      if (!detached && !isEqual(newDates, datesObj)) {
        setCalendarValue([newDates.from || '', newDates.to || ''])
      }
    },
    [datesObj, detached]
  )

  const handleCalendarChange = useCallback(
    (newDates) => {
      const [from = '', to = ''] = newDates || []

      handleChangeDates({ from, to })

      if (size(newDates) === 2) {
        onBlur()
      }
    },
    [handleChangeDates, onBlur]
  )

  const onCloseCalendar = useCallback(
    (values) => {
      if (size(values) < 2) {
        handleChangeDates({ from: '', to: '' })
      }
    },
    [handleChangeDates]
  )

  const calendarOptions = useMemo(
    () => ({
      mode: 'range',
      onClose: onCloseCalendar
    }),
    [onCloseCalendar]
  )

  if (detached) {
    rest.value = datesObj
    rest.onChange = handleInputChange
  } else {
    rest.defaultValue = defaultValue
    rest.onValueChange = handleFieldChange
  }

  return (
    <CalendarPicker
      value={ dates }
      onChange={ handleCalendarChange }
      options={ calendarOptions }
      minDate={ min }
      maxDate={ max }
      styles={ styles }
      disabled={ disabled }
      { ...pickerProps }
    >
      <TextField
        data-input
        ref={ inputRef }
        { ...rest }
        notEditable
        type="tel"
        autoComplete="off"
        transformRender={ transformRender }
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
    </CalendarPicker>
  )
}

InputDateRange.propTypes = {
  value: PropTypes.shape({
    from: PropTypes.string,
    to: PropTypes.string
  }),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  adornmentStyle: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  pickerProps: PropTypes.object,
  minWidth: PropTypes.number,
  defaultValue: PropTypes.shape({
    to: PropTypes.string,
    from: PropTypes.string
  }),
  min: PropTypes.string,
  max: PropTypes.string,
  styles: PropTypes.object
}

InputDateRange.defaultProps = {
  value: {
    from: '',
    to: ''
  },
  defaultValue: {
    from: '',
    to: ''
  },
  onBlur () {},
  onChange () {},
  adornmentStyle: {},
  onClick () {},
  disabled: false,
  pickerProps: {},
  minWidth: 190,
  min: undefined,
  max: undefined,
  styles: {}
}

export default InputDateRange
