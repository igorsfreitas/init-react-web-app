import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`

export const Title = styled(Typography).attrs({ variant: 'h4' })`
  letter-spacing: 2px;
  font-weight: ${ fonts.fontWeight.semiBold };
`

export const SubTitle = styled(Typography).attrs({ variant: 'subtitle1' })`
  color: ${ colors.white };
  text-align: center;
  padding: 15px 20px 0;
  flex: 1;
`

export const Message = styled(Typography).attrs({ variant: 'subtitle1' })`
  color: ${ colors.white };
  font-size: 12px;
  font-weight: normal;
  line-height: 140%;
  white-space: normal;
  font-family:  'Open Sans';
  margin-right: 12px;
`

export const FooterTitle = styled(Typography).attrs({ variant: 'subtitle1' })`
  color: ${ colors.white };
  text-align: center;
  padding: 40px 0 15px;
  font-weight: ${ fonts.fontWeight.semiBold };
`
