import styled, { css } from 'styled-components'

import colors from '@idea/styles/colors'
import fonts from '@idea/styles/fonts'

export const BadgeOptions = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  grid-gap: 5px;
`

export const Badge = styled.button.attrs({ type: 'button' })`
  outline: none;
  display: flex;
  border-radius: 16px;
  height: 32px;
  min-width: 76px;
  background: ${ colors.white };
  color: ${ colors.primary.main };
  border: 1px solid ${ colors.primary.main };
  letter-spacing: 0.24px;
  align-items: center;
  justify-content: center;
  font-weight: ${ fonts.fontWeight.medium };
  padding: 8px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    color: ${ colors.primary };
    border: 2px solid ${ colors.primary };
  }

  &:first-child {
    margin: 5px 5px 5px 0px;
  }

  ${ (props) => props.selected && css`
    color: ${ colors.white };
    background: ${ colors.primary.main };

    &:hover {
      color: ${ colors.white };
      background: ${ colors.primary };
    }
  ` }
`

export const Label = styled.span`
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 2px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
