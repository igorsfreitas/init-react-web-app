import moment from 'moment/moment'

import { dateBackFormat } from '@idea/utils/date'

export default ({ t }) => (YupInstance) => YupInstance
  .test('date', t('invalid date'), (value) => !value || (moment(value, dateBackFormat, true).isValid() && moment(value, dateBackFormat, true).isBefore(moment())))
