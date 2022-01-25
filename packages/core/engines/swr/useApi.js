import api from '@idea/services/api'

import useFetch, { usePostFetch } from './useFetch'

const useApi = (url, axiosParams, swrConfigs) => useFetch(api, url, axiosParams, swrConfigs)
export const usePostApi = (url, axiosParams, swrConfigs) => usePostFetch(api, url, axiosParams, swrConfigs)

export default useApi
