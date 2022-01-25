import moment from 'moment/moment'

export const dateBackFormat = 'YYYY-MM-DD'
export const dateTimeBackFormat = 'YYYY-MM-DD[T]HH:mm:ss.sss'
export const dateTimeZoneBackFormat = 'YYYY-MM-DD[T]HH:mm:ss.sss[Z]'
export const timeBackFormat = 'HH:mm'
export const monthYearBackFormat = 'YYYY-MM'
export const monthDayBackFormat = 'MM-DD'
export const monthDayFriendlyFormat = 'DD/MM'
export const dateFriendlyFormat = 'DD/MM/YYYY'
export const dateTimeFriendlyFormat = 'DD/MM/YYYY HH:mm:ss'

export const leapYear = '2020'
export const formatDateTimeZoneBackFormat = (date) => moment(date).format(dateTimeZoneBackFormat)

export const formatBackDateTimeToBackDateFormat = (date) => moment(date, dateTimeBackFormat).format(dateBackFormat)
export const formatBackDateTimeToFriendlyDateFormat = (date) => moment(date, dateTimeBackFormat).format(dateFriendlyFormat)

export const formatBackDateToFriendlyDateFormatt = (date) => moment(date, dateBackFormat).format(dateFriendlyFormat)
