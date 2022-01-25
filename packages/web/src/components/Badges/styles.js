import styled, { css } from 'styled-components'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export const BadgeOptions = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`

export const Badge = styled.button.attrs({ type: 'button' })`
  outline: none;
  display: flex;
  border-radius: 16px;
  height: 32px;
  min-width: 76px;
  background: ${ colors.white };
  color: ${ colors.primary };
  border: 1px solid ${ colors.primary };
  letter-spacing: 0.24px;
  align-items: center;
  justify-content: center;
  font-weight: ${ fonts.fontWeight.medium };
  font-family: ${ fonts.fontFamilyOpenSans };
  padding: 8px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    color: ${ colors.darkPink };
    border: 1px solid ${ colors.darkPink };
  }

  ${ (props) => props.selected && css`
    color: ${ colors.white };
    background: ${ colors.primary };

    &:hover {
      color: ${ colors.white };
      background: ${ colors.primary };
    }
  ` }
`

export const Label = styled.span`
  color: ${ colors.grey3 };
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 6px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
