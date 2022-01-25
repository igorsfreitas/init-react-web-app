import React from 'react'

import PropTypes from 'prop-types'

import HtmlToComponent from '~/components/HtmlToComponent'

import { Container } from './styles'

const Icon = ({
  icon, style, ...iconProps
}) => icon && (
  <Container style={ { ...style } }>
    <HtmlToComponent html={ icon(iconProps) } />
  </Container>
)

Icon.propTypes = {
  icon: PropTypes.func.isRequired,
  style: PropTypes.object,
  size: PropTypes.number,
  color: PropTypes.string
}

Icon.defaultProps = {
  style: {},
  size: 24,
  color: undefined
}

export default Icon
