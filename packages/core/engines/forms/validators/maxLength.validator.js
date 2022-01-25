export default ({ t, maxLength }) => (YupInstance) =>
  YupInstance.test(
    'maxLength',
    t('max of {num} characters', { num: maxLength }),
    (value) => !value || value.length <= maxLength
  )
