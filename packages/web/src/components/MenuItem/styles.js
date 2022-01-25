import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'

export default makeStyles({
  itemIcon: { minWidth: 35 },
  listItem: {
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    fontWeight: 'normal',

    '& > div': {
      width: '100%',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  },
  gutters: { paddingRight: 0, paddingLeft: 0 },
  text: {
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: 16,
    display: 'flex',
    alignItems: 'center',
    '& > span': {
      fontSize: '14px',
      fontWeight: 'bold'
    }
  },
  menuLink: {
    width: '100%',
    display: 'flex',

    '& * ': {
      color: `${ colors.pink }`,
      whiteSpace: 'nowrap'
    }
  },
  menuActive: {
    display: 'flex',
    '& * ': { color: `${ colors.darkPink }` },
    '& $activeIndicator': {
      opacity: 1,
      backgroundColor: `${ colors.darkPink }`,
      borderColor: colors.darkPink
    },
    '& $listItem': { width: 'calc(100% - 4px)' }
  },
  activeIndicator: {
    borderRight: 'solid 5px',
    borderRadius: '0px 6px 6px 0px',
    opacity: 0,
    height: 35
  },
  listItemIcon: {
    minWidth: 21,
    marginLeft: 16
  },
  arrow: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingLeft: 10
  },
  collapse: {
    width: '100%',
    '& $listItem': { paddingLeft: 40 },
    '& $menuLink': {
      '& *': {
        color: `${ colors.pink }`, fontWeight: 'normal', fontFamily: 'Open Sans'
      }
    },
    '& $menuActive': { '& *': { color: `${ colors.darkPink } !important` } }
  }
})

export const Container = styled.div`
  &:hover {
    background-color: ${ ({ opened }) => opened ? colors.lightGrey3 : 'transparent' };
  }
  transition: background-color .5s ease;
`
