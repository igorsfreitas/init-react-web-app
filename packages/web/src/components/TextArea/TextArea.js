import React from 'react'

import PropTypes from 'prop-types'

import { ThemeProvider } from '@material-ui/core/styles'

import TextField from '~/components/TextField'

import { theme } from './styles'

const TextArea = ({
  rows,
  ...rest
}) => (
  <ThemeProvider theme={ theme }>
    <TextField
      variant="outlined"
      inputProps={ { resize: 'both' } }
      multiline
      rows={ rows }
      { ...rest }
    />
  </ThemeProvider>
)

TextArea.propTypes = { rows: PropTypes.number }

TextArea.defaultProps = { rows: 4 }

export default TextArea
