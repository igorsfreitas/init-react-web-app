import { I18nProvider } from '@meta-react/i18n'

import { dictionaries } from '@idea/i18n'
import StoreProvider from '@idea/stores/StoreProvider'

// import AlertList from '~/containers/AlertList'
import Router from '~/routes'
import store from '~/store'
// import withGlobalStyles from '~/styles/hoc/withGlobalStyles'

import 'moment/locale/pt-br'

const App = () => (
  <StoreProvider store={ store }>
    <I18nProvider language="pt-BR" dictionaries={ dictionaries }>
      <>
        {/* <AlertList /> */}
        <Router />
      </>
    </I18nProvider>
  </StoreProvider>
)

export default App
