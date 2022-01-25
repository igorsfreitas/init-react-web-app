import {
  memo,
  useEffect
} from 'react'

import { useModal } from '@idea/use-modal'

// import MainLayout from '~/layouts/MainLayout'
// import { useRoutes } from '~/routes/authenticated.routes'

import RouterSwitch from './RouterSwitch'

const AuthenticatedScreenRouter = (props) => {
  // const { routes } = useRoutes()
  const { resetModals } = useModal()

  useEffect(() => {
    resetModals()
  }, [resetModals])

  return (
    <RouterSwitch
      routes={ {} }
      { ...props }
    />
  )
}

export default memo(AuthenticatedScreenRouter)
