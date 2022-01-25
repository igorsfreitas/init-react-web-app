// import { REACT_APP_API_URL } from 'react-native-dotenv'

import axios from 'axios'

const api = axios.create({
  // baseURL: REACT_APP_API_URL || process.env.REACT_APP_API_URL,
  baseURL: process.env.REACT_APP_API_URL,
  mode: 'no-cors',
  paramsSerializer (params) {
    // Sample implementation of query string building
    let result = ''
    Object.keys(params).forEach((key) => {
      result += `${ key }=${ encodeURIComponent(params[key]) }&`
    })
    return result.substr(0, result.length - 1)
  }
})

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default api
