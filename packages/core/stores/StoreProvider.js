import React from 'react'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'

import PropTypes from 'prop-types'

const StoreProvider = ({ store, children }) => (
  <Provider store={ store }>
    <PersistGate loading={ null } persistor={ store.persist() }>
      {children}
    </PersistGate>
  </Provider>
)

StoreProvider.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.any
}

StoreProvider.defaultProps = { children: null }

export default StoreProvider
