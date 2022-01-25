import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${ colors.lightGrey4 };
  padding: 10px;
  align-items: center;
  justify-content: space-evenly;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`

export const Text = styled(Typography).attrs({ align: 'right' })`
  color: ${ colors.lightPink4 };
`
