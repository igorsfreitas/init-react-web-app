import styled from 'styled-components'

import fonts from '@idea/styles/fonts'

import Button from './Button'

export default styled(Button).attrs({ color: 'secondary' })`
  font-weight: ${ fonts.fontWeight.bold };
`
