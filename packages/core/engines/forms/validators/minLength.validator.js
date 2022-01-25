export default ({
  t, length, field
}) => (YupInstance) => YupInstance.test(
  'minLength',
  t('{this} must have a min of {length} characters', {
    this: field,
    length
  }),
  (value) => {
    if (!value) {
      return true
    }
    return value.length >= length
  }
)
