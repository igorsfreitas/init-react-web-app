export default ({
  t, text = 'the value is not valid', regex
}) => (YupInstance) => YupInstance
  .matches(regex, t(text))
