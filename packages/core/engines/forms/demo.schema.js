import * as Yup from 'yup'

import flow from 'lodash/fp/flow'

import email from '@idea/forms/validators/email.validator'
import minLength from '@idea/forms/validators/minLength.validator'
import required from '@idea/forms/validators/required.validator'

export const INITIAL_VALUES = {
  name: '',
  email: '',
  address: {
    city: '',
    neighborhood: '',
    street: ''
  }
}

const demoSchema = ({ t, data }) => Yup.object().shape({
  name: required({ t })(Yup.string()),
  email: flow(
    email({ t }),
    required({ t })
  )(Yup.string()),
  address: Yup.object().shape({
    city: flow(
      minLength({
        t,
        min: 3,
        name: t('city', { howMany: 1 })
      }),
      required({ t })
    )(Yup.string()),
    neighborhood: (() => {
      let YupInstance = Yup.string()
      if (data?.address?.street) {
        YupInstance = required({ t })(YupInstance)
      }
      return YupInstance
    })(),
    street: Yup.string()
  })
})

export default demoSchema
