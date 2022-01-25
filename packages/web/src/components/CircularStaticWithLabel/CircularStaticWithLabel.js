import React from 'react'

import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'

const CircularStaticWithLabel = (props) => (
  <Box position="absolute" display="inline-flex" padding= "10px"
    borderRadius= "50%"
    style={ { background: 'white' } }
  >
    <CircularProgress
      size={ 60 } variant="determinate" { ...props } style={ { color: props.status === 'error' ? colors.error.main : colors.secondary } }
    />
    <Box
      top={ 0 }
      left={ 0 }
      bottom={ 0 }
      right={ 0 }
      position="absolute"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="caption" component="div" color="textSecondary">{`${ Math.round(
        props.value
      ) }%`}</Typography>
    </Box>
  </Box>
)

CircularStaticWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired
}
export default CircularStaticWithLabel
