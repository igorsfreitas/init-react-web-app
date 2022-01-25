import React from 'react'

import ArrowDownIcon from '~/components/icons/ArrowDownIcon'

import IconButton from '../IconButton'

const ArrowDownIconButton = (props) => (
  <IconButton { ...props }>
    <ArrowDownIcon />
  </IconButton>
)

export default ArrowDownIconButton
