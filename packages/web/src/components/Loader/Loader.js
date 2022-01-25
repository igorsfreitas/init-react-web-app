import CircularProgress from '@material-ui/core/CircularProgress'

import { Container } from './styles'

const Loader = (props) => (
  <Container>
    <CircularProgress
      color="secondary"
      size={ 100 }
      { ...props }
    />
  </Container>
)

export default Loader
