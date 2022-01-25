import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '~/components/Button'

const StyledBadge = styled(Button)`
  border-radius: 8px;
  padding: 2px 12px;
  text-transform: capitalize;
  border: 1px solid rgba(0, 0, 0, 0.23);
  font-weight: bold;
`

const Badge = (props) => {
  const {
    selected,
    ...rest
  } = props

  return (
    <StyledBadge
      color={ selected ? 'primary' : 'default' }
      variant={ selected ? 'contained' : 'outlined' }
      { ...rest }
    />
  )
}

Badge.propTypes = { selected: PropTypes.bool }

Badge.defaultProps = { selected: false }

export default Badge
