import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import documentTypes from '@idea/constants/documentTypes'
import { houseExclamationIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import InputSelect from '~/components/InputSelect'

const InputSelectWithHouseIcon = ({
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
          <Icon icon={ houseExclamationIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

InputSelectWithHouseIcon.propTypes = { InputProps: PropTypes.object }

InputSelectWithHouseIcon.defaultProps = { InputProps: {} }

export default InputSelectWithHouseIcon
