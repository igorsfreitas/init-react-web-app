import { makeStyles } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'

export default makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: colors.white,
    overflowY: 'auto'
  }
}))
