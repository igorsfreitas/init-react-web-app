import React from 'react'

import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import CareButton from '~/components/Button/CareButton'

import {
  Container,
  Text
} from './styles'

const CardPhoneFooter = ({
  title, onButtonClick, ...props
}) => (
  <Container { ...props }>
    <Text>
      {title}
    </Text>
    <I18n
      as={ CareButton }
      mode="contained"
      onClick={ onButtonClick }
      style={ { paddingLeft: 35, paddingRight: 35 } }
    >
      click here
    </I18n>
  </Container>
)

CardPhoneFooter.propTypes = {
  title: PropTypes.string,
  onButtonClick: PropTypes.func
}

CardPhoneFooter.defaultProps = {
  title: null,
  onButtonClick () {}
}

export default CardPhoneFooter
