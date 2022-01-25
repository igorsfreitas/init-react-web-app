import styled from 'styled-components'

import MuiIconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '60px',
    borderRadius: '10px',
    boxShadow: '0px 3px 5px 2px rgb(0 0 0 / 8%)'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  quantity: {
    width: '20%',
    flex: '1 0 auto',
    textAlign: 'center',
    alignSelf: 'center'
  },
  title: {
    width: '50%',
    flex: '1 0 auto',
    alignSelf: 'center'
  },
  graph: {
    width: '15%',
    flex: '1 0 auto',
    marginRight: '2%',
    marginLeft: '2%',
    marginTop: '-2%',
    padding: 0
  }
}))
export const StyledIconButton = styled(MuiIconButton)``
