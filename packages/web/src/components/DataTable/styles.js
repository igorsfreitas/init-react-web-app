import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'

import Button from '~/components/Button'

export default makeStyles({
  searchField: { marginRight: 10 },
  addButton: {},
  // color: colors.britSecondary.base,
  // borderColor: colors.britSecondary.base
  menuItem: {
    justifyContent: 'center',
    // color: colors.britPrimary2.base,
    // fontFamily: fontFamilyOpenSans,
    // fontWeight: fonts.fontWeight.medium,
    // fontSize: fonts.fontSize.S,
    // border: `1px solid ${ colors.britPrimary1.lightest }`,
    margin: '8px 12px !important',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.06)',
    borderRadius: 40,
    '&:hover': {}
    // border: `1px solid ${ colors.britPrimary2.base }`,
    // backgroundColor: colors.white
  }
})

export const ButtonAddNew = styled(Button)`
  font-size: 12px;
  white-space: nowrap;
`
export const ButtonFilterData = styled(Button)`
  font-size: 12px;
  white-space: nowrap;
`
export const ButtonDownload = styled(Button)`
  font-size: 12px;
  white-space: nowrap;
  margin-right: 8px;
`

export const ButtonGoBack = styled(Button)`
  font-size: 12px;
  white-space: nowrap;
  margin-right: 10px;
`

export const theme = (theme) => ({
  ...theme,
  overrides: {
    ...theme.overrides,
    MuiTableCell: {
      ...(theme.overrides.MuiTableCell || {}),
      body: { fontFamily: 'Open Sans' },
      head: {
        fontFamily: 'Open Sans',
        color: `${ colors.primary } !important`,
        fontWeight: '700'
      }
    },
    MuiTableSortLabel: {
      ...(theme.overrides.MuiTableSortLabel || {}),
      icon: { color: `${ colors.primary } !important` }
    },
    MuiTablePagination: {
      ...(theme.overrides.MuiTablePagination || {}),
      root: { padding: '0 5px !important' }
    },
    MuiPaper: {
      ...(theme.overrides.MuiPaper || {}),
      root: { width: '100%' },
      rounded: { borderRadius: 4 }
    },
    MuiCard: {
      ...(theme.overrides.MuiCard || {}),
      root: { borderRadius: 20 }
    },
    MuiCardContent: {
      ...(theme.overrides.MuiCardContent || {}),
      root: {
        paddingTop: 20,
        paddingBottom: '10px !important',
        paddingLeft: 30,
        paddingRight: 30
      }
    },
    MuiCheckbox: {
      ...(theme.overrides.MuiCheckbox || {}),
      root: { marginLeft: '5px !important' }
    },
    MuiTypography: {
      ...(theme.overrides.MuiTypography || {}),
      caption: { padding: '0 5px' }
    },
    MuiOutlinedInput: {
      ...(theme.overrides.MuiOutlinedInput || {}),
      root: {
        ...(theme.overrides.MuiOutlinedInput?.root || {}),
        height: 32
      }
    },
    MuiToolbar: {
      ...(theme.overrides.MuiToolbar || {}),
      root: { flexWrap: 'wrap' },
      gutters: {
        paddingLeft: '0 !important',
        paddingRight: '0 !important'
      }
    },
    MuiPopover: {
      ...(theme.overrides.MuiPopover || {}),
      paper: {
        borderRadius: '24px',
        paddingTop: 14,
        paddingBottom: 14
      }
    }
  }
})
