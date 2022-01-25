import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'

import EditIcon from '~/components/icons/EditIcon'

import Button from './Button'

const theme = (currentTheme) => ({
  ...currentTheme,
  palette: {
    ...currentTheme.palette,
    secondary: colors.error
  }
})

const EditButton = (props) => (
  <ThemeProvider theme={ theme }>
    <Button
      color="secondary"
      startIcon={ <EditIcon /> }
      { ...props }
    />
  </ThemeProvider>
)

export default EditButton
