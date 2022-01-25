import React, {
  useCallback,
  forwardRef
} from 'react'

import PropTypes from 'prop-types'

import filter from 'lodash/filter'
import find from 'lodash/find'
import map from 'lodash/map'

import Box from '@material-ui/core/Box'
import FormHelperText from '@material-ui/core/FormHelperText'
import InfoIcon from '@material-ui/icons/Info'

import colors from '@idea/styles/colors'

import Badge from './components/Badge'
import {
  Container,
  BadgeOptions,
  Label
} from './styles'

const InputBadges = forwardRef(({
  options,
  value,
  onChange,
  valueKey,
  idKey,
  label,
  disabled,
  error
}, fieldRef) => {
  const handleCheckOption = useCallback(
    (currentOption) => {
      if (!disabled) {
        let changedValue
        const isSelectedOption = !!find(value, (val) => val === currentOption[idKey])

        if (isSelectedOption) {
          changedValue = filter(value, (val) => val !== currentOption[idKey])
        } else {
          changedValue = [...value, currentOption[idKey]]
        }

        onChange(changedValue)
      }
    },
    [idKey, disabled, onChange, value]
  )

  return (
    <Container ref={ fieldRef }>
      {label && <Label>{label}</Label>}
      <BadgeOptions>
        {map(options, (option) => (
          <Badge
            key={ String(option[idKey]) }
            selected={ !!find(value, (val) => val === option[idKey]) }
            onClick={ () => handleCheckOption(option) }
            disabled={ disabled }
          >
            {option[valueKey]}
          </Badge>
        ))}
      </BadgeOptions>
      {!!error && (
        <div style={ { marginLeft: 10, marginBottom: 10 } }>
          <FormHelperText error>
            <Box style={ { color: colors.error.main } } component="span" display="flex" alignItems="center">
              <InfoIcon fontSize="small" style={ { marginRight: '8px' } } />
              {' '}{ error }
            </Box>
          </FormHelperText>
        </div>
      )}
    </Container>
  )
})

InputBadges.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
  valueKey: PropTypes.string,
  idKey: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string
}

InputBadges.defaultProps = {
  value: [],
  onChange () {},
  label: null,
  options: [],
  valueKey: 'name',
  idKey: 'id',
  disabled: false,
  error: null
}

export default InputBadges
