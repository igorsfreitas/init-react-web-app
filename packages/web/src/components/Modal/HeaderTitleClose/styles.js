import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  closeIcon: { margin: 5 },
  fullScreenIcon: {
    marginTop: 5,
    marginBottom: 5
  },
  header: {
    display: 'inline-flex',
    flex: '0 0 auto',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  title: {
    flex: 'auto !important',
    paddingBottom: 10,
    minWidth: 150
  }
})
