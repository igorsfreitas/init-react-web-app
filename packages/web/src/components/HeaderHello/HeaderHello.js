
import React from 'react'

import PropTypes from 'prop-types'

import colors from '@idea/styles/colors'

import {
  Container,
  Title,
  SubTitle,
  FooterTitle
} from './styles'

const HeaderHello = ({
  title,
  subtitle,
  footer,
  titleColor,
  titleStyle,
  subtitleStyle,
  ...props
}) => (
  <Container { ...props }>
    <Title style={ { color: titleColor, ...titleStyle } }>
      {title}
    </Title>
    <SubTitle style={ subtitleStyle }>
      {subtitle}
    </SubTitle>
    {footer && (
      <FooterTitle>
        {footer}
      </FooterTitle>
    )}

  </Container>
)

HeaderHello.propTypes = {
  titleStyle: PropTypes.object,
  subtitleStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  footer: PropTypes.string,
  titleColor: PropTypes.string
}

HeaderHello.defaultProps = {
  titleStyle: {},
  subtitleStyle: {},
  subtitle: '',
  footer: '',
  titleColor: colors.pink4
}

export default HeaderHello
