import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import documentTypes from '@idea/constants/documentTypes'
import { houseWithClockIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import InputSelect from '~/components/InputSelect'

const InputSelectWithHouseClockIcon = ({
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
          <Icon icon={ houseWithClockIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

InputSelectWithHouseClockIcon.propTypes = { InputProps: PropTypes.object }

InputSelectWithHouseClockIcon.defaultProps = { InputProps: {} }

export default InputSelectWithHouseClockIcon
