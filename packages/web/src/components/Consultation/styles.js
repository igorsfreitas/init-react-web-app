import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 20px #D3D3D3;
  padding: 20px;
`

export const TypeColor = styled.div`
  ${ ({ cardColor }) =>
    cardColor ? 'background-color: #2DD09F;' : 'background-color: #7A3387;' }
  width: 11px;
  height: 80%;
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
`
export const Title = styled.text`
  font-style: normal;
  font-weight: 600;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 21px;
  color: #323130;
  align-self: flex-start;
`
export const Pencil = styled.div`
  align-self: flex-end;
  top: 10px;
`
export const Subtitle = styled.text`
  font-family: Open Sans;
  font-style: Regular;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  width: 100%;
  color: rgba(50, 49, 48, 0.6);
  align-self: flex-start;
  text-align: start;
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
`
export const Divisor = styled.div`
  border: 1px solid #F7F7F7;
  width: 100%;
  margin-bottom: 0px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 350px;
  width: 100%;
  height: 160px;
  margin-bottom: 15px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`
export const Vazio = styled.div`
  background-color: #7A3387;
`
export const NaAgenda = styled.div`
  background-color: #7A3387;
`
export const Realizado = styled.div`
  background-color: #2DD09F;
`
export const NaoRealizados = styled.div`
  background-color: #7A3387;
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
export const BtnIncluir = styled.div`
  background-color: #7A3387;
  color: white;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 140%;
  background: linear-gradient(44.97deg, #A877B1 17.02%, #D799E3 100%);
  width: 101px;
  height: 20px;
  border-radius: 30px;
`
export const BtnIncluso = styled.div`
  color: white;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 140%;
  background: linear-gradient(69.34deg, #4EAEFF 24.59%, #A6D6FF 100%);
  width: 105px;
  height: 20px;
  border-radius: 30px;
`
export const Radio = styled.div`
  margin-left: 5%;
  display: flex;
  justify-content: space-between;
  width: 145px;
  font-size: 12px !important;
  flex-direction: row;
  align-items: flex-start;
`
export const RadioLabel = styled.div`
  font-size: 12px;
`
export const BtnIncludeConsultation = styled.div`
  height: 30px;
  min-width: 100px;
  padding: 16px;
  border-color: #7A3387;
  color: #7A3387;
  border-radius: 30px;
  font-weight: 500px;
  line-height: 17px;
  font-size: 12px;
  margin-top:16px;
`
