import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

import MuiCard from '@material-ui/core/Card'
import MuiCardContent from '@material-ui/core/CardContent'

import colors from '@idea/styles/colors'

export const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`

export const Card = styled(MuiCard).attrs({ raised: true })`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled(MuiCardContent)`
  flex: 1;
  height: 100%;
  width: 100%;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 10% 15%;
`

export const Line = styled.div`
  width: 50%;
  height: 3px;
  border-radius: 50px;
  background-color: ${ colors.pink };
  box-shadow: 0 2px 3px ${ hexToRgba('#000', 0.1) };
`
