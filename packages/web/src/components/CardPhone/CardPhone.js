import React from 'react'

import PropTypes from 'prop-types'

import {
  Container,
  Card,
  Content,
  Line
} from './styles'

const CardPhone = ({
  children, footer, ...props
}) => (
  <Container>
    <Card>
      <Line />
      <Content { ...props }>
        {children}
      </Content>
      {footer}
    </Card>
  </Container>
)

CardPhone.propTypes = {
  children: PropTypes.any,
  footer: PropTypes.element
}

CardPhone.defaultProps = {
  children: null,
  footer: null
}

export default CardPhone
