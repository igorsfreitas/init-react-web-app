
import React from 'react'

import PropTypes from 'prop-types'

import {
  Container,
  Title,
  SubTitle
} from './styles'

const MenuHeaderPregnant = ({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  ...props
}) => (
  <Container { ...props }>
    <Title style={ { ...titleStyle } }>
      {title}
    </Title>
    <SubTitle style={ subtitleStyle }>
      {subtitle}
    </SubTitle>
  </Container>
)

MenuHeaderPregnant.propTypes = {
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

MenuHeaderPregnant.defaultProps = {
  titleStyle: {},
  subtitleStyle: {},
  title: '',
  subtitle: ''
}

export default MenuHeaderPregnant
