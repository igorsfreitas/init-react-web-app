import styled from 'styled-components'

export const GridContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: grid;

  grid-row-gap: 35px;

  grid-template-rows: 15% 1fr;
  grid-template-columns: 1fr;

  @media only screen and (max-width: 795px) {
    grid-template-columns: 1fr;
    grid-template-rows: 180px max-content 1fr;
    grid-row-gap: 35px;
  }
`

export const Cell = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const ButtonsContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const Description = styled.div`
  width: 100%;
  color: #7D6382;
  display: flex;
  flex-direction: row;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 10px;
`
