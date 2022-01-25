
import React from 'react'

import PropTypes from 'prop-types'

import { Container } from './styles'

const MenuFooterPregnant = ({
  timeWeekStyle,
  timeMonthStyle,
  timeWeek,
  timeMonth,
  ...props
}) => (
  <Container { ...props }>
    <div style={ timeWeekStyle }>
      <label htmlFor="semana">
        {{ timeWeek }}º Semana
      </label>
    </div>
    <div style={ timeMonthStyle }>
      <label htmlFor="trimestre">
        {{ timeMonth }}º Trimestre
      </label>
    </div>
  </Container>
)

MenuFooterPregnant.propTypes = {
  timeWeekStyle: PropTypes.object,
  timeMonthStyle: PropTypes.object,
  timeWeek: PropTypes.string.isRequired,
  timeMonth: PropTypes.string.isRequired
}

MenuFooterPregnant.defaultProps = {
  timeWeekStyle: {},
  timeMonthStyle: {},
  timeWeek: '',
  timeMonth: ''
}

export default MenuFooterPregnant
