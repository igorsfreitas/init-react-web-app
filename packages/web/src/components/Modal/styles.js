import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'

export default makeStyles((theme) => ({
  '& .MuiDialog-paper': { borderRadius: 25 },
  contentText: {
    fontFamily: theme.typography.fontFamily,
    '& p': { marginBottom: 5 }
  },

  dialogCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  dialogCenterRight: {
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  dialogCenterLeft: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  dialogTopCenter: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  dialogTopRight: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  dialogTopLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },

  dialogBottomCenter: {
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  dialogBottomRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  dialogBottomLeft: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },

  withoutFooter: { paddingBottom: 24 },
  footerContainer: {
    backgroundColor: colors.white,
    zIndex: 420,
    justifyContent: 'center',
    display: 'flex',
    margin: 10,

    '& button': { minWidth: 120 }
  }
}))

export const FooterContent = styled.div`
  display: flex;
  width: 100%;
`
