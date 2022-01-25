import size from 'lodash/size'

import { trimMask } from '@idea/utils/formatters'

export default (value = '') => {
  if (size(trimMask(value)) < 11) {
    // the last digit enables the mask to change
    return '(99) 9999-99999'
  }
  return '(99) 9 9999-9999'
}
