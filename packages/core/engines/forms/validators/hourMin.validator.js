import moment from 'moment/moment'

import { timeBackFormat } from '@idea/utils/date'

export default ({ t }) => (YupInstance) => YupInstance
  .test('hour-min', t('invalid hour'), (value) => !value || (moment(value, timeBackFormat, true).isValid()))
