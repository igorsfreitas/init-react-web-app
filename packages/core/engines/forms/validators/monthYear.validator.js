import moment from 'moment/moment'

import { monthYearBackFormat } from '@idea/utils/date'

export default ({ t }) => (YupInstance) => YupInstance
  .test('date', t('invalid date'), (value) => !value || moment(value, monthYearBackFormat, true).isValid())
