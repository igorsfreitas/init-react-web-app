import {
  createContext,
  useContext,
  useCallback
} from 'react'

import filter from 'lodash/filter'
import map from 'lodash/map'
import uniqBy from 'lodash/uniqBy'

export const CREATE_MODAL = 'CREATE_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const REMOVE_MODAL = 'REMOVE_MODAL'
export const RESET_MODALS = 'RESET_MODALS'

export const ModalsContext = createContext()
// eslint-disable-next-line react-hooks/exhaustive-deps
export const useModal = () => useCallback(useContext(ModalsContext), [])

export const modalsReducer = (modals = [], action = {}) => {
  switch (action.type) {
    case CREATE_MODAL:
      return uniqBy([
        ...modals,
        {
          ...action.modal,
          open: true
        }
      ], 'id')

    case CLOSE_MODAL:
      return map(modals, (modal) => {
        if (modal.id === action.modal.id) {
          return { ...modal, open: false }
        }
        return modal
      })

    case REMOVE_MODAL:
      return filter(modals, (modal) => modal.id !== action.modal.id)

    case RESET_MODALS:
      return []

    default:
      return modals
  }
}
