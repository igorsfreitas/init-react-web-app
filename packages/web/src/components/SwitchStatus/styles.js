import styled from 'styled-components'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
  makeStyles,
  withStyles
} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'

export const StyledFormControlLabel = styled(withStyles({ label: { fontSize: 14 } })(FormControlLabel))`
  margin-left: 0;
  min-width: 90px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled(Typography)`
  font-size: 14px;
  color: #7E398A;
`

export default makeStyles({
  root: {
    height: '16px !important',
    marginRight: '12px !important',
    padding: '0 !important',
    width: '28px !important'
  },
  switchBase: {
    color: `${ colors.white } !important`,
    padding: '2px !important'
  },
  checked: {
    transform: 'translateX(12px) !important',
    '& + $track': { backgroundColor: `${ colors.secondary } !important` }
  },
  thumb: {
    height: '12px !important',
    width: '12px !important'
  },
  track: {
    backgroundColor: `${ colors.error.main } !important`,
    borderRadius: '25px !important'
  }
})
