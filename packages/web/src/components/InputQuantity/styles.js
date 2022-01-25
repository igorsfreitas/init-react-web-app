import styled from 'styled-components'

import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'

import IconButton from '~/components/IconButton'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  line-height: 0;
  margin-top: 5px;
`
export const Button = styled(IconButton).attrs({
  marginHorizontal: false,
  debounce: false
})`
  border: 1px solid ${ ({ disabled }) => disabled ? colors.lightPink2 : colors.darkPink2 };
  padding: 10px;
  transition: border 0.2s;
`

export const Input = styled.input`
  width: 44px;
  margin-left: 3px;
  margin-right: 3px;
  height: auto;
  display: flex;
  border: 0;
  text-align: center;
  font-size: 16px;
  line-height: 0;
  background: ${ colors.white };
  color: ${ colors.darkPink3 };
`

export const Label = styled(Typography).attrs({ variant: 'caption' })`
  color: ${ ({ $error }) => $error ? colors.error.main : colors.darkPink2 };
  transition: color 0.2s;
`
