import React from 'react'

import PropTypes from 'prop-types'

import {
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import TablePagination from '@material-ui/core/TablePagination'

import colors from '@idea/styles/colors'

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0
  }
})

export const theme = (theme) => ({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      main: colors.pink2,
      contrastText: colors.white
    }
  }
})

const Pagination = ({ classes, ...props }) => {
  const paginationClasses = useStyles()
  return (
    <ThemeProvider theme={ theme }>
      <TablePagination
        classes={ paginationClasses }
        { ...props }
        rowsPerPageOptions={ [] }
        labelDisplayedRows={ () => null }
      />
    </ThemeProvider>
  )
}

Pagination.propTypes = { classes: PropTypes.object }

Pagination.defaultProps = { classes: {} }

export default Pagination
