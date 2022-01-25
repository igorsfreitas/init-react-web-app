import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export default makeStyles({
  card: { width: '100%' },
  image: { height: 105 }
})

export const Container = styled.div`
  position: relative;
  margin-bottom: 10px;
  ${ ({ isDragActive }) => !isDragActive ? '' : css`
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: -5px;
      width: calc(100% + 5px);
      height: calc(100% + 1px);
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      font-weight: ${ fonts.fontWeight.semiBold };
      color: ${ colors.darkPink };

      background-color: ${ hexToRgba(colors.lightPink, 0.6) };
      border: 3px dashed ${ hexToRgba(colors.darkPink2, 0.6) };
      border-radius: 16px 16px 16px 0px;
      content: '${ ({ dropText }) => dropText }';
    }
  ` }
`

export const GridContainer = styled.div`
  display: grid;
  width: 100%;

  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 186px;
`

export const Cell = styled.div`
  display: flex;
  align-items: flex-end;
`

export const Border = styled.div`
  width: 80%;
  height: ${ ({ hover, error }) => (hover || error) ? 2 : 1 }px;
  margin-top: ${ ({ hover, error }) => (hover || error) ? -2 : -1 }px;
  background-color: ${ ({ error }) => error ? colors.error.main : colors.darkPink2 };
`

export const Label = styled(Typography).attrs({ variant: 'caption' })`
  color: ${ ({ $error }) => $error ? colors.error.main : colors.darkPink2 };
`
