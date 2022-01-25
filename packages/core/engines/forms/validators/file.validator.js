import isString from 'lodash/isString'

export default ({ t }) => (YupInstance) => YupInstance.test(
  'file',
  t('invalid file'),
  (value) => isString(value) || value instanceof File || value?.id // url || local file || cloud
)
