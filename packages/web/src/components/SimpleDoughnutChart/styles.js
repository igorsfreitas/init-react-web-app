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

export const DoughnutInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 22%;
  right: 20%;
  bottom: 20%;
  left: 20%;
  border-radius: 50%;
  line-height: 120%;
  z-index: 1; /* Allow tooltips on top */
  overflow: hidden;
  h2,div {
    text-align: center;
  }
  h2 {
    letter-spacing: 3px;
  }
`
