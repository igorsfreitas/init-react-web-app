
import React from 'react'

import PropTypes from 'prop-types'

import CircularProgress from '~/components/CircularProgress'

import { Container } from './styles'

const MenuImagePregnant = ({
  titleStyle,
  title,
  value,
  ...props
}) => (
  <Container { ...props }>
    <CircularProgress
      { ...props }
    >
    </CircularProgress>
  </Container>
)

MenuImagePregnant.propTypes = {
  titleStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  value: ''
}

MenuImagePregnant.defaultProps = {
  titleStyle: {},
  title: '',
  value: ''
}

export default MenuImagePregnant
