import React, { forwardRef } from 'react'

import { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import Switch from '@material-ui/core/Switch'

import useStyles, {
  StyledFormControlLabel,
  Container,
  Label
} from './styles'

const StatusSwitchStyled = forwardRef(({
  value,
  label,
  activeLabel,
  inactiveLabel,
  onChange,
  readOnly,
  ...rest
}, fieldRef) => {
  const classes = useStyles()
  const t = useT()

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <StyledFormControlLabel
        label={
          value
            ? activeLabel || t('active')
            : inactiveLabel || t('inactive')
        }
        control={ (
          <Switch
            ref={ fieldRef }
            { ...rest }
            onChange={ (...event) => !readOnly && onChange(...event) }
            checked={ value }
            classes={ classes }
          />
        ) }
      />
    </Container>
  )
})

StatusSwitchStyled.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.bool,
  activeLabel: PropTypes.string,
  inactiveLabel: PropTypes.string,
  readOnly: PropTypes.bool
}

StatusSwitchStyled.defaultProps = {
  onChange () {},
  value: false,
  label: null,
  activeLabel: null,
  inactiveLabel: null,
  readOnly: false
}

export default StatusSwitchStyled
