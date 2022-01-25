import { memo } from 'react'
// import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import supportsHistory from '@meta-awesome/functions/src/supportsHistory'

// import { selectIsAuthenticated } from '@idea/stores/auth/auth.selectors'
// import { selectLoading } from '@idea/stores/loading/loading.selectors'

// import Loader from '~/components/Loader'

// import { AuthenticatedRoutesProvider } from '../authenticated.routes'
import { GuestRoutesProvider } from '../guest.routes'

const forceRefresh = !supportsHistory()

const ScreenRouter = () =>
// const loading = useSelector(selectLoading)
// const isAuthenticated = useSelector(selectIsAuthenticated)

// const RouterContext = isAuthenticated ? AuthenticatedRoutesProvider : GuestRoutesProvider

  (
    <Router forceRefresh={ forceRefresh }>
      {/* loading && <Loader /> */}
      <GuestRoutesProvider />
    </Router>
  )

export default memo(ScreenRouter)
