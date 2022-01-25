import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  useState,
  useMemo,
  useEffect
} from 'react'

import I18n, { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import forEach from 'lodash/forEach'
import get from 'lodash/get'
import isBoolean from 'lodash/isBoolean'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import isFunction from 'lodash/isFunction'
import isNumber from 'lodash/isNumber'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import omitBy from 'lodash/omitBy'
import set from 'lodash/set'

import { FormContext } from '../hooks/useForm'
import reloadSchemaUtils from '../utils/reloadSchema'
import validateDataBySchema from '../utils/validateDataBySchema'

const FormProvider = forwardRef((props, formRef) => {
  const {
    UnformComponent,
    schemaConstructor,
    schemaProps,
    resetOnSubmit,
    onSubmit,
    defaultValues,
    children,
    filterEmptyValues,
    ...otherProps
  } = props

  const t = useT()

  const unformRef = useRef(null)
  const fields = useRef([])
  const fieldsOrderCounter = useRef(0)
  const fieldsZIndexCounter = useRef(100)

  const [schema, setSchema] = useState({})

  const needSchema = useMemo(
    () => !!schemaConstructor,
    [schemaConstructor]
  )

  // intercepting unform setFieldValue
  const setFieldValue = useCallback(
    (fieldName, value, ...other) => {
      const doSetFieldValue = (val) => {
        const fieldRef = formRef.current.getFieldRef(fieldName)
        let changed = false

        if (fieldRef?.setValue && !isEqual(fieldRef?.value, val)) {
          fieldRef.setValue(val)
          changed = true
        }
        // force unform field update
        const unformRefValue = unformRef.current.getFieldValue(fieldName)
        if (!isEqual(val, unformRefValue)) {
          unformRef.current.setFieldValue(fieldName, val)
        }
        if (changed && fieldRef.externalOnChange) {
          fieldRef.externalOnChange({ target: { value: val } }, ...other)
        }
        if (changed && fieldRef?.touched && fieldRef?.validateField()) {
          fieldRef.validateField()
        }
      }

      const makeSetFieldValue = () => {
        if (isFunction(value)) {
          const data = formRef.current.getFieldValue(fieldName)
          doSetFieldValue(value(data))
        } else {
          doSetFieldValue(value)
        }
      }

      if (formRef?.current) {
        makeSetFieldValue()
      } else {
        setTimeout(makeSetFieldValue, 100)
      }
    },
    [formRef]
  )

  // intercepting and changing unform clearField
  const clearField = useCallback(
    (fieldName) => {
      const fieldRef = formRef.current.getFieldRef(fieldName)
      if (
        fieldRef &&
        fieldRef.setValue &&
        !isEqual(fieldRef.value, fieldRef.defaultValue)
      ) {
        fieldRef.setValue(fieldRef.defaultValue)
      }
      // force unform field update
      const unformRefValue = unformRef.current.getFieldValue(fieldName)
      if (!isEqual(fieldRef.defaultValue, unformRefValue)) {
        unformRef.current.setFieldValue(fieldName, fieldRef.defaultValue)
      }
    },
    [formRef]
  )

  // intercepting and changing unform reset
  const reset = useCallback(
    () => {
      forEach(fields.current, (fieldName) => {
        const fieldRef = formRef.current.getFieldRef(fieldName)
        if (fieldRef.resetField) {
          fieldRef.resetField()
        }
      })
    },
    [formRef]
  )

  const getFieldOrder = useCallback(
    () => {
      fieldsOrderCounter.current += 1
      const order = fieldsOrderCounter.current
      return order
    },
    []
  )

  const getFieldZIndex = useCallback(
    () => {
      const zIndex = fieldsZIndexCounter.current
      fieldsZIndexCounter.current -= 1
      return zIndex
    },
    []
  )

  const handleSubmit = useCallback(
    async (data, funcs = {}) => {
      try {
        if (!isEmpty(schema)) {
          await validateDataBySchema({ data, schema })
        }

        const values = (() => {
          const submittedValues = {
            ...defaultValues,
            ...data
          }
          if (filterEmptyValues) {
            return omitBy(submittedValues, (item) => {
              if (isString(item) || isObject(item)) {
                return isEmpty(item)
              }
              return !isNumber(item) && !isBoolean(item)
            })
          }
          return submittedValues
        })()

        onSubmit(values, { ...funcs, reset })
        if (resetOnSubmit) {
          reset()
        }
      } catch (err) {
        console.error('form submit error', err, data)
        if (err.formError) {
          formRef.current.setErrors(err.messages)
        }
      }
    },
    [defaultValues, filterEmptyValues, formRef, onSubmit, reset, resetOnSubmit, schema]
  )

  const getData = useCallback(
    () => {
      const data = {}
      forEach(fields.current, (fieldName) => {
        set(data, fieldName, formRef.current.getFieldValue(fieldName))
      })
      return data
    },
    [formRef]
  )

  // intercepting and changing unform setData
  const setData = useCallback(
    (values) => {
      const doSetData = (vals) => {
        forEach(fields.current, (fieldName) => {
          const newFieldValue = get(vals, fieldName)
          if (newFieldValue !== undefined) {
            const fieldRef = formRef.current.getFieldRef(fieldName)
            if (fieldRef.setValue) {
              fieldRef.setValue(newFieldValue)
            }
          }
        })
        formRef?.current?.setErrors({})
      }

      setTimeout(() => {
        if (isFunction(values)) {
          const data = formRef.current.getData()
          doSetData(values(data))
        } else {
          doSetData(values)
        }
      }, 100)
    },
    [formRef]
  )

  const setFieldTouched = useCallback(
    (fieldName) => {
      const fieldRef = formRef.current.getFieldRef(fieldName)
      if (fieldRef.setTouched) {
        fieldRef.setTouched(true)
      }
    },
    [formRef]
  )

  const submit = useCallback(
    () => {
      const data = getData()
      handleSubmit(data)
    },
    [getData, handleSubmit]
  )

  const registerFieldName = useCallback(
    (fieldName) => {
      fields.current.push(fieldName)
    },
    []
  )

  const unregisterFieldName = useCallback(
    (fieldName) => {
      fields.current = fields.current.filter((field) => field !== fieldName)
    },
    []
  )

  const createSchema = useCallback(
    () => {
      if (schemaConstructor && formRef?.current?.getData) {
        const data = formRef.current.getData()
        const newSchema = schemaConstructor({
          t, data, props: schemaProps
        })
        setSchema(newSchema)
        return newSchema
      }
      return {}
    },
    [formRef, schemaConstructor, schemaProps, t]
  )

  const validateField = useCallback(
    (fieldName) => {
      const fieldRef = formRef.current.getFieldRef(fieldName)
      if (fieldRef.validateField) {
        fieldRef.validateField()
      }
    },
    [formRef]
  )

  const reloadSchema = useCallback(
    () => setTimeout(
      () => {
        reloadSchemaUtils(formRef)
        formRef.current?.setErrors({})
      },
      100
    ),
    [formRef]
  )

  useEffect(() => {
    createSchema()
  }, [createSchema])

  useImperativeHandle(formRef, () => ({
    ...unformRef.current,
    createSchema,
    reloadSchema,
    setFieldValue,
    submit,
    registerFieldName,
    unregisterFieldName,
    getData,
    setData,
    clearField,
    reset,
    validateField,
    setFieldTouched
  }))

  const state = useMemo(
    () => ({
      formRef,
      schema,
      needSchema,
      registerFieldName,
      unregisterFieldName,
      getFieldZIndex,
      getFieldOrder,
      defaultValues
    }),
    [defaultValues, formRef, getFieldOrder, getFieldZIndex, needSchema, registerFieldName, schema, unregisterFieldName]
  )

  return (
    <UnformComponent
      ref={ unformRef }
      onSubmit={ handleSubmit }
      { ...otherProps }
    >
      <FormContext.Provider value={ state }>
        {(!isEmpty(schema) || !schemaConstructor)
          ? children
          : <I18n style={ { textAlign: 'center' } }>loading</I18n>
        }
      </FormContext.Provider>
    </UnformComponent>
  )
})

FormProvider.propTypes = {
  /** function that return the schema to control the form validations */
  schemaConstructor: PropTypes.func,
  /** bind dynamically options to schema constructor */
  schemaProps: PropTypes.object,
  /** function called when form pass the validations and it is submitted */
  onSubmit: PropTypes.func.isRequired,
  /** specific Form component from @unform/mobile or @unform/web */
  UnformComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object
  ]).isRequired,
  children: PropTypes.any,
  resetOnSubmit: PropTypes.bool,
  defaultValues: PropTypes.object,
  filterEmptyValues: PropTypes.bool
}

FormProvider.defaultProps = {
  children: null,
  schemaConstructor: undefined,
  schemaProps: {},
  resetOnSubmit: false,
  defaultValues: {},
  filterEmptyValues: false
}
export default FormProvider
