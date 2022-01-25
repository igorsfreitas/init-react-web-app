import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 20px #D3D3D3;
  padding: 18px 55px;
`

const cardTypeColor = {
  nao_lida: '#FF647C',
  lida: '#2DD09F',
  vacina: '#4EAEFF'
}

export const TypeColor = styled.div`
  background-color: ${ ({ type }) => cardTypeColor[type] };
}
  width: 11px;
  height: 75%;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
`
export const Title = styled.text`
  font-style: normal;
  font-weight: 600;
  justify-content: flex-start;
  font-size: 20px;
  line-height: 21px;
  color: #323130;
  align-self: flex-start;
  font-family: Poppins;
  margin-bottom: 8px;
`

export const Unread = styled.div`
  
`

export const Subtitle = styled.text`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: rgba(50, 49, 48, 0.6);
  `
export const Description = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  padding-top: 25px;
  padding-bottom: 5px;
  line-height: 140%;
  width: 100%;
  color: #B3A2B3;
  align-items: center;

  & .question {
    color: #4EAEFF;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 120%;
  }
`
export const Divisor = styled.div`
  border: 1px solid #F7F7F7;
  width: 100%;
  margin-bottom: 0px;
`
export const Wrapper = styled.div`
  display: relative;
  display: flex;
  flex-direction: row;
  min-width: 350px;
  width: 100%;
  height: 160px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;

  ${ (props) => props.unread && css`
    &:after {
      content: '';
      position: relative;
      width: 10px;
      height: 10px;
      background: linear-gradient(67.7deg, #FF647C 27.77%, #FF98A8 100%);
      border-radius: 10px;
      top: -85px;
      right: -5px;
    }
  ` }
`

export const Half = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 65%;
`
export const Full = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`
export const Left = styled.div`
  float: right;
  display: flex;
  flex-direction: row-reverse;
`
