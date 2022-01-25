import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    borderRadius: '30px',
    boxShadow: '0px 3px 5px 2px rgb(0 0 0 / 8%)',
    padding: '20px 30px'
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

export const DoughnutContainer = styled.div`
  margin: 0 auto;
  position: relative;
`
