import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_STATIC_IBGE_API_URL,
  mode: 'no-cors'
})

export default api

export const getStates = async () => {
  try {
    const { data } = await api.get('/v1/localidades/estados?orderBy=nome')
    return data
  } catch (e) {
    return null
  }
}

export const getCities = async (state) => {
  try {
    const { data } = await api.get(`/v1/localidades/estados/${ state }/municipios`)
    return data
  } catch (e) {
    return null
  }
}
