
import styled, { css } from 'styled-components'

import { Typography } from '@material-ui/core'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
  padding: 10px;
  border-bottom: 1px solid #F2F0F3;
`

export const Title = styled(Typography).attrs({ variant: 'caption' })`
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  color: #FF647C;
`

export const ContentContainer = styled.div`
  padding: 10px 50px 15px;
  border-radius: 25px;
  /* overflow: hidden; */
  ${ ({ open }) => !open && css`
    opacity: 0;
    height: 0;
  ` }
`
