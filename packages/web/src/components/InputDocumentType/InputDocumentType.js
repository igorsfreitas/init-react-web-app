import PropTypes from 'prop-types'

import InputAdornment from '@material-ui/core/InputAdornment'

import documentTypes from '@idea/constants/documentTypes'
import { documentIcon } from '@idea/icons'

import Icon from '~/components/Icon'
import InputSelect from '~/components/InputSelect'

const InputDocumentType = ({
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
          <Icon icon={ documentIcon } size={ 24 } />
        </InputAdornment>
      )
    } }
  />
)

InputDocumentType.propTypes = { InputProps: PropTypes.object }

InputDocumentType.defaultProps = { InputProps: {} }

export default InputDocumentType
