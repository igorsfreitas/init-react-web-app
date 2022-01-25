import React, { useMemo } from 'react'

import clsx from 'clsx'
import PropTypes from 'prop-types'

import Box from '@material-ui/core/Box'
import MuiCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InfoIcon from '@material-ui/icons/Info'

import useStyles, { Label } from './styles'

const Checkbox = (props) => {
  const {
    name,
    value,
    onChange,
    label,
    error,
    disabled,
    required,
    ...rest
  } = props

  const classes = useStyles()

  const helperText = useMemo(
    () => (error) && (
      <Box component="span" display="flex" alignItems="center" style={ { marginTop: 3 } }>
        <InfoIcon color="error" fontSize="small" style={ { marginRight: '8px' } } />
        {' '}
        <Label $error>
          { error }
        </Label>
      </Box>
    ),
    [error]
  )

  return (
    <>
      <FormControlLabel
        label={ label }
        classes={ {
          root: classes.root,
          label: clsx(classes.label, {
            [classes.labelActive]: value,
            [classes.labelInactive]: !value
          })
        } }
        disabled={ disabled }
        control={
          <MuiCheckbox
            checked={ value }
            onChange={ onChange }
            name={ name }
            color="primary"
            checkedIcon={ <span className={ clsx(classes.icon, classes.checkedIcon) } /> }
            icon={ <span className={ classes.icon } /> }
          />
        }
        { ...rest }
      />
      { helperText }
    </>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

Checkbox.defaultProps = {
  value: false,
  onChange () {},
  disabled: false,
  required: false,
  error: null,
  label: null
}

export default Checkbox
