import {
  useMemo,
  lazy,
  createContext,
  useContext
} from 'react'
import { useLocation } from 'react-router-dom'

import find from 'lodash/find'
import map from 'lodash/map'

import { ModalsProvider } from '@idea/use-modal'

import GuestScreenRouter from './ScreenRouter/GuestScreenRouter'

const StartScreen = lazy(() => import('~/modules/start/screens/StartScreen'))

const RoutesContext = createContext()

export const useRoutes = () => useContext(RoutesContext)

export const GuestRoutesProvider = () => {
  const { pathname: currentPath } = useLocation()

  const routes = useMemo(() => ({
    start: {
      path: '/',
      exact: true,
      Component: StartScreen,
      layout: 'start'
    }
  }), [])

  const currentRoute = useMemo(
    () => find(map(routes, (item) => item), { path: currentPath }) || {},
    [routes, currentPath]
  )

  const toolkit = useMemo(
    () => ({
      currentPath,
      currentRoute,
      routes
    }),
    [currentPath, currentRoute, routes]
  )

  return (
    <RoutesContext.Provider value={ toolkit }>
      <ModalsProvider>
        <GuestScreenRouter />
      </ModalsProvider>
    </RoutesContext.Provider>
  )
}
