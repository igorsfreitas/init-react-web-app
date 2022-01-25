import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'

import colors from '@idea/styles/colors'

import Button from './Button'

const theme = (currentTheme) => ({
  ...currentTheme,
  palette: {
    ...currentTheme.palette,
    secondary: colors.error
  }
})

const CancelButton = (props) => (
  <ThemeProvider theme={ theme }>
    <Button
      color="secondary"
      { ...props }
    />
  </ThemeProvider>
)

export default CancelButton
