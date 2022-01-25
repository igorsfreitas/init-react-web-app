import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export default makeStyles({
  root: {
    marginLeft: -5,
    padding: 0
  },
  label: {
    transition: 'color 0.3s',
    fontFamily: fonts.fontFamilyOpenSans,
    paddingLeft: 3
  },
  labelInactive: { color: colors.lightPink3 },
  labelActive: { color: colors.pink },
  labelError: { color: 'red' },
  icon: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    position: 'relative',
    padding: 0,
    marginRight: 0,
    opacity: 0.2,
    transition: 'opacity 0.3s',
    background: `linear-gradient(44.97deg, ${ colors.pink } 17.02%, ${ colors.pink5 } 100%)`,

    '&:before': {
      position: 'absolute',
      top: 8,
      left: 8,
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle" +
        " cx='16' cy='16' r='16' fill='white'" +
        ' /%3E%3C/svg%3E")',
      content: '""'
    }
  },
  checkedIcon: { opacity: 1 }
})

export const Label = styled(Typography).attrs({ variant: 'caption' })`
  color: ${ ({ $error }) => $error ? colors.error.main : colors.darkPink2 }
`
