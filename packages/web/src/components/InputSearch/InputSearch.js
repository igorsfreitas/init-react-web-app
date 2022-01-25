import React from 'react'

import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import colors from '@idea/styles/colors'

import SearchIcon from '~/components/icons/SearchIcon'
import TextField from '~/components/TextField'

const InputSearch = ({ iconProps, ...props }) => (
  <TextField
    { ...props }
    type="search"
    variant="outlined"
    InputProps={ {
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon { ...iconProps } style={ { color: colors.mediumGray2 } } />
        </InputAdornment>
      )
    } }
  />
)

InputSearch.propTypes = { iconProps: PropTypes.object }

InputSearch.defaultProps = { iconProps: {} }

export default InputSearch
