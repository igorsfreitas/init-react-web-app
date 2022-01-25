import moment from 'moment/moment'

import {
  dateBackFormat,
  dateFriendlyFormat
} from '@idea/utils/date'

export default ({ t, maxDate }) => (YupInstance) => YupInstance
  .test(
    'date',
    `${ t('invalid date') }. Max: ${ moment(maxDate, dateBackFormat).format(dateFriendlyFormat) }`,
    (date) => {
      const dateMoment = moment(date, dateBackFormat)
      const maxDateMoment = moment(maxDate, dateBackFormat)
      return dateMoment.isSameOrBefore(maxDateMoment)
    }
  )
