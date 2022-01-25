import * as Yup from 'yup'

import date from './date.validator'

export default ({ t }) => (YupInstance) => YupInstance
  .shape({
    from: date({ t })(Yup.string()),
    to: date({ t })(Yup.string())
  }).nullable()
