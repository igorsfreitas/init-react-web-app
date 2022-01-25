import React, {
  useMemo,
  useCallback,
  forwardRef,
  useState
} from 'react'

import PropTypes from 'prop-types'

import find from 'lodash/find'
import isEmpty from 'lodash/isEmpty'
import isObject from 'lodash/isObject'
import map from 'lodash/map'

import CircularProgress from '@material-ui/core/CircularProgress'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'

import ArrowDownIconButton from '~/components/IconButton/ArrowDownIconButton'
import CloseIconButton from '~/components/IconButton/CloseIconButton'
import TextField from '~/components/TextField'

import { Placeholder } from './styles'

const InputSelectStyled = forwardRef(({
  iconAdornment,
  native,
  options,
  idKey,
  valueKey,
  loading,
  clearable,
  InputProps,
  value,
  onChange,
  placeholder,
  ...props
}, fieldRef) => {
  const [open, setOpen] = useState(false)

  const EndAdornment = useMemo(
    () => (
      <InputAdornment position="end">
        {loading && <CircularProgress disableShrink color="inherit" size={ 20 } />}
        {clearable && value !== '' && <CloseIconButton size="small" marginHorizontal={ false } onClick={ () => onChange({ target: { value: '' } }) } />}
        <ArrowDownIconButton size="small" marginHorizontal={ false } onClick={ () => setOpen(true) } />
      </InputAdornment>
    ),
    [clearable, loading, onChange, value]
  )

  // options={ [{
  //   idKey: 'teste',
  //   valueKey: 'Selecione'
  // }, ...unidadesAcompanhamentoUrgencia] }

  const renderedOptions = useMemo(
    () => {
      if (isEmpty(options)) {
        return (
          <MenuItem selected disabled value="">
            <em>Nenhum valor</em>
          </MenuItem>
        )
      }
      const optionsWithNullOption = [
        {
          [idKey]: null,
          [valueKey]: placeholder || 'Selecione'
        },
        ...options
      ]
      return map(optionsWithNullOption, (option) => {
        const id = option[idKey]
        const name = option[valueKey]

        return (
          <MenuItem value={ id } key={ id }>
            {name}
          </MenuItem>
        )
      })
    },
    [options, idKey, valueKey, placeholder]
  )

  const transformRender = useCallback(
    (value) => (isObject(value) ? value[valueKey] : value),
    [valueKey]
  )

  return (
    <TextField
      ref={ fieldRef }
      detached
      select
      InputProps={ {
        ...InputProps,
        endAdornment: EndAdornment
      } }
      transformRender={ transformRender }
      SelectProps={ {
        native,
        open,
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
        IconComponent: () => null,
        displayEmpty: true,
        renderValue: (val) => find(options, (option) => option[idKey] === val)?.[valueKey] || <Placeholder>{placeholder}</Placeholder>
      } }
      value={ value }
      onChange={ onChange }
      placeholder={ placeholder }
      { ...props }
    >
      {renderedOptions}
    </TextField>
  )
})

InputSelectStyled.propTypes = {
  id: PropTypes.string,
  label: PropTypes.any,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  iconAdornment: PropTypes.element,
  native: PropTypes.bool,
  options: PropTypes.array,
  idKey: PropTypes.string,
  valueKey: PropTypes.string,
  loading: PropTypes.bool,
  clearable: PropTypes.bool,
  InputProps: PropTypes.object,
  value: PropTypes.any,
  onChange: PropTypes.func
}

InputSelectStyled.defaultProps = {
  id: 'select',
  label: null,
  placeholder: '',
  required: false,
  error: undefined,
  helperText: null,
  iconAdornment: null,
  native: false,
  options: [],
  idKey: 'id',
  valueKey: 'name',
  loading: false,
  InputProps: {},
  clearable: false,
  value: '',
  onChange () {}
}

export default InputSelectStyled
