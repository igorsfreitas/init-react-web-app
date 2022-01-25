import React, {
  useReducer,
  useMemo
} from 'react'

import PropTypes from 'prop-types'

import map from 'lodash/map'

import {
  CREATE_MODAL,
  CLOSE_MODAL,
  REMOVE_MODAL,
  RESET_MODALS,
  ModalsContext,
  modalsReducer
} from './modalsReducer'

const ModalsProvider = (props) => {
  const {
    ContainerComponent,
    children = null
  } = props

  const [modals, dispatch] = useReducer(modalsReducer, [])

  const createModal = (modal) => dispatch({ type: CREATE_MODAL, modal })
  const removeModal = (modal, immediately = false) => {
    if (immediately) {
      dispatch({ type: REMOVE_MODAL, modal })
    } else {
      dispatch({ type: CLOSE_MODAL, modal })
      setTimeout(() => {
        dispatch({ type: REMOVE_MODAL, modal })
      }, 300)
    }
  }

  const resetModals = () => dispatch({ type: RESET_MODALS })

  const state = {
    createModal,
    removeModal,
    resetModals,
    modals
  }

  const renderedModals = useMemo(
    () => map(modals, (modal) => {
      const {
        id,
        open,
        Component,
        props: modalProps = {}
      } = modal

      return (
        <Component
          key={ id }
          id={ id }
          handleClose={ () => removeModal({ id }) }
          open={ open }
          { ...modalProps }
        />
      )
    }),
    [modals]
  )

  return (
    <ModalsContext.Provider value={ state }>
      {children}

      <ContainerComponent>
        {renderedModals}
      </ContainerComponent>
    </ModalsContext.Provider>
  )
}

ModalsProvider.propTypes = {
  children: PropTypes.any.isRequired,
  ContainerComponent: PropTypes.func
}

ModalsProvider.defaultProps = { ContainerComponent: ({ children }) => children }

export default ModalsProvider
