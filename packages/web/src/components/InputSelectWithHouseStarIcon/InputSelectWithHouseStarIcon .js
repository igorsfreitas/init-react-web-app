import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import documentTypes from '@idea/constants/documentTypes'
import { houseStarIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import InputSelect from '~/components/InputSelect'

const InputSelectWithHouseStarIcon = ({
  InputProps,
  ...props
}) => (
  <InputSelect
    options={ documentTypes }
    { ...props }
    InputProps={ {
      ...InputProps,
      startAdornment: (
        <InputAdornment position="start" >
          <Icon icon={ houseStarIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

InputSelectWithHouseStarIcon.propTypes = { InputProps: PropTypes.object }

InputSelectWithHouseStarIcon.defaultProps = { InputProps: {} }

export default InputSelectWithHouseStarIcon
