import {
  useState,
  useEffect,
  useMemo,
  useCallback
} from 'react'

import isEmpty from 'lodash/isEmpty'

import useSWR from './useSWR'

const useFetch = (axiosInstance, url = '', axiosParams, swrConfigs) => {
  const {
    data, error, mutate, isValidating
  } = useSWR(url, async (path) => {
    try {
      const response = await axiosInstance.get(path, axiosParams)
      return response.data
    } catch (err) {
      console.error(err)
      return []
    }
  }, swrConfigs)

  const [loading, setLoading] = useState(false)

  const refresh = useCallback(
    (...mutateOptions) => {
      setLoading(true)
      mutate(...mutateOptions)
    },
    [mutate]
  )

  const state = useMemo(
    () => ({
      data,
      error,
      mutate,
      isValidating,
      loading,
      refresh
    }),
    [data, error, isValidating, loading, mutate, refresh]
  )

  useEffect(
    () => {
      if (isEmpty(data) && isValidating) {
        setLoading(true)
      } else if (!isValidating) {
        setLoading(false)
      }
    },
    [data, isValidating]
  )

  return state
}

export const usePostFetch = (axiosInstance, url = '', axiosParams) => {
  const {
    data, error, mutate, isValidating
  } = useSWR(url, async (path) => {
    try {
      const response = await axiosInstance.post(path, axiosParams)
      return response.data
    } catch (err) {
      console.error(err)
      return []
    }
  })

  const [loading, setLoading] = useState(false)

  const refresh = useCallback(
    (...mutateOptions) => {
      setLoading(true)
      mutate(...mutateOptions)
    },
    [mutate]
  )

  const state = useMemo(
    () => ({
      data,
      error,
      mutate,
      isValidating,
      loading,
      refresh
    }),
    [data, error, isValidating, loading, mutate, refresh]
  )

  useEffect(
    () => {
      if (isEmpty(data) && isValidating) {
        setLoading(true)
      } else if (!isValidating) {
        setLoading(false)
      }
    },
    [data, isValidating]
  )

  return state
}

export default useFetch
