
import React from 'react'

import PropTypes from 'prop-types'

import {
  Container,
  Tag
} from './styles'

const MenuFooterPregnant = ({
  timeWeekStyle,
  timeMonthStyle,
  timeWeek,
  timeMonth,
  ...props
}) => (
  <Container { ...props }>
    <Tag style={ timeWeekStyle }>
      <label htmlFor="semana">
        { timeWeek || '?' }º Semana
      </label>
    </Tag>
    <Tag style={ timeMonthStyle }>
      <label htmlFor="trimestre">
        { timeMonth || '?' }º Trimestre
      </label>
    </Tag>
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
