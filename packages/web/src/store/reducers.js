import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: []
}

const rootReducer = combineReducers({})

export default persistReducer(rootPersistConfig, rootReducer)
