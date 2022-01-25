import moment from 'moment/moment'

import {
  dateBackFormat,
  dateFriendlyFormat
} from '@idea/utils/date'

export default ({ t, minDate }) => (YupInstance) => YupInstance
  .test(
    'date',
    `${ t('invalid date') }. Min: ${ moment(minDate, dateBackFormat).format(dateFriendlyFormat) }`,
    (date) => {
      const dateMoment = moment(date, dateBackFormat)
      const minDateMoment = moment(minDate, dateBackFormat)
      return dateMoment.isSameOrAfter(minDateMoment)
    }
  )
