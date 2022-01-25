import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

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
