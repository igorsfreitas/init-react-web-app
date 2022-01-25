import isBoolean from 'lodash/isBoolean'
import isEmpty from 'lodash/isEmpty'
import isNumber from 'lodash/isNumber'

export default ({
  t, isNotText, bool
}) => (YupInstance) => {
  let aux = YupInstance

  if (!isNotText) {
    aux = aux.trim()
  } else {
    aux = aux.test(
      'notEmpty',
      t('required field'),
      (value) => {
        if (bool) {
          return isBoolean(value) && value
        }
        return (
          !isEmpty(value) ||
          isNumber(value) ||
          isBoolean(value)
        )
      }
    )
  }

  return aux.required(t('required field'))
}
