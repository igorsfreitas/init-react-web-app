import debounce from 'lodash/debounce'

const firstHit = debounce(
  (formRef) => formRef.current?.createSchema(),
  400,
  { leading: true, trailing: false }
)

const lastHit = debounce(
  (formRef) => formRef.current?.createSchema(),
  400
)

const reloadSchema = (formRef, doubleCheck) => {
  firstHit(formRef)
  if (doubleCheck) {
    lastHit(formRef)
  }
}

export default reloadSchema
