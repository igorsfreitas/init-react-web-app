import styled from 'styled-components'

import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ProgressRow = styled(Row)`
  background-color: ${ colors.lightPink3 };
  border-radius: 50px;
  height: 4px;
`

export const CompletedCircularProgress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: '100%'
  },
  colorSecondary: {
    backgroundColor: 'transparent'
    // backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  bar: { borderRadius: 5 }
// eslint-disable-next-line no-use-before-define
}))(CircularProgress)

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: 15px;
`

export const Text = styled(Typography)`
  color: ${ colors.white };
  font-family: ${ fonts.fontFamilyOpenSans };
`
