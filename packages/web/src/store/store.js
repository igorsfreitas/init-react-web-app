import {
  createStore,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { persistStore } from 'redux-persist'
import createSagaMiddleware, { END } from 'redux-saga'

// import api from '@idea/services/api'

import reducers from './reducers'
import sagas from './sagas'

const middlewares = []

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  middlewares.push(createLogger({}))
}

const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

store.close = () => store.dispatch(END)
store.persist = () => persistStore(store, {})
store.runSagas = sagaMiddleware.run
store.runSagas(sagas)

/*
  Add header Authorization when store contains accessToken
  or remove when it not contains accessToken
*/
/* store.subscribe(() => {
  const { accessToken } = store.getState().auth

  if (accessToken) {
    api.defaults.headers.common.Authorization = `Bearer ${ accessToken }`
  } else {
    const { Authorization, ...common } = api.defaults.headers.common || {}
    api.defaults.headers.common = common
  }
}) */

export default store
