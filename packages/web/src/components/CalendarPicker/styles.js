import hexToRgba from 'hex-to-rgba'

import { makeStyles } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

import 'flatpickr/dist/themes/material_green.css'
import 'flatpickr/dist/plugins/monthSelect/style.css'

const useStyles = makeStyles(() => ({
  '@global': {
    '.flatpickr-calendar': {
      backgroundColor: `${ colors.white } !important`,
      width: 'auto !important',
      padding: '10px 20px !important',
      borderRadius: 30
    },

    '.flatpickr-month,.flatpickr-weekdays,.flatpickr-monthDropdown-month,.flatpickr-weekday,.flatpickr-monthDropdown-months,.selected,.flatpickr-day.startRange,.flatpickr-day.endRange': { backgroundColor: `${ colors.white }!important` },

    '.selected,.flatpickr-day.startRange,.flatpickr-day.endRange': {
      background: `linear-gradient(66.72deg, ${ colors.purple3 } 29.34%, ${ colors.pink } 100%) !important`,
      borderColor: 'transparent !important',
      color: `${ colors.white } !important`
    },

    '.flatpickr-day.inRange': {
      boxShadow: `-5px 0 0 ${ colors.primary }, 5px 0 0 ${ colors.primary } !important`,
      background: `${ colors.primary }!important`,
      borderColor: `${ colors.primary }!important`,
      color: `${ colors.white } !important`
    },

    '.flatpickr-weekday': {
      color: `${ colors.pink }!important`,
      fontWeight: `${ fonts.fontWeight.light } !important`
    },

    '.flatpickr-weekdays': {
      borderTop: `1px dashed ${ colors.lightGrey5 }`,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20
    },

    'span.flatpickr-weekday': { whiteSpace: 'normal' },

    '.hide-flatpickr-native-input': { display: 'none' },

    '.flatpickr-month, .flatpickr-prev-month, .flatpickr-next-month': {
      fill: `${ colors.darkPink2 } !important`,
      color: `${ colors.pink } !important`,
      textShadow: `0 0 2px ${ hexToRgba(colors.text, 0.2) }`
    },

    '.flatpickr-months .flatpickr-prev-month:hover svg, .flatpickr-months .flatpickr-next-month:hover svg': { fill: `${ colors.darkPink2 } !important` },

    '.flatpickr-calendar.arrowTop:before': { marginLeft: 19 },
    '.flatpickr-calendar.arrowTop:after': {
      borderBottomColor: `${ colors.white }!important`,
      marginLeft: 20
    },

    '.flatpickr-calendar.arrowBottom:after': { borderTopColor: `${ colors.white }!important` },
    '.flatpickr-monthSelect-theme-light': { '& .flatpickr-next-month, & .flatpickr-prev-month': { display: 'none' } },
    '.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1))': { boxShadow: `-10px 0 0 ${ colors.primary }` },

    '.flatpickr-day': {
      lineHeight: '37px !important',
      color: `${ colors.darkPink2 } !important`
    },

    '.flatpickr-day.flatpickr-disabled, .flatpickr-day.flatpickr-disabled:hover, .flatpickr-day.prevMonthDay, .flatpickr-day.nextMonthDay, .flatpickr-day.notAllowed, .flatpickr-day.notAllowed.prevMonthDay, .flatpickr-day.notAllowed.nextMonthDay': { color: `${ colors.lightGrey5 } !important` },

    '.flatpickr-days, .flatpickr-innerContainer': { border: '0 !important' },

    '.flatpickr-current-month': {
      paddingTop: '6px !important',

      '& *': { fontWeight: `${ fonts.fontWeight.semiBold } !important` }
    },

    '.flatpickr-next-month': {
      right: '35px !important',
      top: '10px !important'
    },

    '.flatpickr-prev-month': {
      left: '35px !important',
      top: '10px !important'
    },

    '.flatpickr-day.selected, .flatpickr-day.startRange, .flatpickr-day.endRange, .flatpickr-day.selected.inRange, .flatpickr-day.startRange.inRange, .flatpickr-day.endRange.inRange, .flatpickr-day.selected:focus, .flatpickr-day.startRange:focus, .flatpickr-day.endRange:focus, .flatpickr-day.selected:hover, .flatpickr-day.startRange:hover, .flatpickr-day.endRange:hover, .flatpickr-day.selected.prevMonthDay, .flatpickr-day.startRange.prevMonthDay, .flatpickr-day.endRange.prevMonthDay, .flatpickr-day.selected.nextMonthDay, .flatpickr-day.startRange.nextMonthDay, .flatpickr-day.endRange.nextMonthDay': {
      color: `${ colors.white } !important`,
      fontWeight: fonts.fontWeight.semiBold
    }
  }
}))

export default useStyles
