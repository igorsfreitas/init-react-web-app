import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export const Container = styled.div`
  width: inherit;
  position: relative;
  top: 5px;

  & > .pregnant-image {
    position: absolute;
    top: 50%;  
    left: 50%; 

    transform: translate(-50%, -50%); 
  }
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
