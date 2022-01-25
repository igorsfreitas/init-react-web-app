import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  background-color: transparent;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
  
  * > * {
    padding: 0;
  }
  `

export const Tag = styled.div`
  font-size: 12px;
  color: #F7F7F7;
  padding: 3px 6px;
  border: 1px solid #7D6382;
  border-radius: 5px;
  
  &:first-of-type {
    margin-right: 18px
  }
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

export const FooterTitle = styled(Typography).attrs({ variant: 'subtitle1' })`
  color: ${ colors.white };
  text-align: center;
  padding: 40px 0 15px;
  font-weight: ${ fonts.fontWeight.semiBold };
`
