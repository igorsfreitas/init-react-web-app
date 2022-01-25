import {
  useEffect,
  memo
} from 'react'

import { useModal } from '@idea/use-modal'

// import LoginAdminLayout from '~/layouts/LoginAdminLayout'
// import LoginLayout from '~/layouts/LoginLayout'
// import StartLayout from '~/layouts/StartLayout'
import { useRoutes } from '~/routes/guest.routes'

import RouterSwitch from './RouterSwitch'

const GuestScreenRouter = (props) => {
  const { routes } = useRoutes()
  const { resetModals } = useModal()

  /* const Layout = useMemo(
    () => {
      switch (currentRoute.layout) {
        case 'start':
          return StartLayout
        case 'loginAdmin':
          return LoginAdminLayout
        case 'login':
        default:
          return LoginLayout
      }
    },
    [currentRoute]
  ) */

  useEffect(() => {
    resetModals()
  }, [resetModals])

  return (
    <RouterSwitch
      routes={ routes }
      { ...props }
    />
  )
}

export default memo(GuestScreenRouter)
