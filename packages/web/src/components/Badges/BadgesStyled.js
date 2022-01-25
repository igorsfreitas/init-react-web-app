import React, {
  useCallback,
  forwardRef
} from 'react'

import PropTypes from 'prop-types'

import filter from 'lodash/filter'
import find from 'lodash/find'
import map from 'lodash/map'

import {
  Container,
  BadgeOptions,
  Badge,
  Label
} from './styles'

const Badges = forwardRef(({
  options,
  value,
  onChange,
  label,
  single
}, fieldRef) => {
  const handleCheckOption = useCallback(
    (currentOption) => {
      let changedValue
      const isSelectedOption = !!find(value, { id: currentOption.id })

      if (isSelectedOption) {
        changedValue = filter(value, (option) => option.id !== currentOption.id)
      }

      if (single) {
        changedValue = [currentOption]
      } else {
        changedValue = [...value, { ...currentOption }]
      }

      onChange(changedValue)
    },
    [onChange, value, single]
  )

  return (
    <Container ref={ fieldRef }>
      {label && <Label>{label}</Label>}
      <BadgeOptions>
        {map(options, (option) => (
          <Badge
            key={ String(option.id) }
            selected={ find(value, { id: option.id }) }
            onClick={ () => handleCheckOption(option) }
          >
            {option.name}
          </Badge>
        ))}
      </BadgeOptions>
    </Container>
  )
})

Badges.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
  single: PropTypes.bool
}

Badges.defaultProps = {
  value: [],
  onChange () {},
  label: null,
  options: [],
  single: false
}

export default Badges
