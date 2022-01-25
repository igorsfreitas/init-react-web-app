import * as Yup from 'yup'

import required from '@idea/forms/validators/required.validator'

export const INITIAL_VALUES = {
  user: '',
  password: ''
}
const schema = ({ t }) => Yup.object().shape({
  user: required({ t, isNotText: false })(Yup.string()),
  password: required({ t, isNotText: false })(Yup.string())
})

export default schema
