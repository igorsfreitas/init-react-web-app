import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import documentTypes from '@idea/constants/documentTypes'
import { calendarIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import InputSelect from '~/components/InputSelect'

const InputSelectWithIcon = ({
  InputProps,
  ...props
}) => (
  <InputSelect
    options={ documentTypes }
    { ...props }
    InputProps={ {
      ...InputProps,
      startAdornment: (
        <InputAdornment position="start">
          <Icon icon={ calendarIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

InputSelectWithIcon.propTypes = { InputProps: PropTypes.object }

InputSelectWithIcon.defaultProps = { InputProps: {} }

export default InputSelectWithIcon
