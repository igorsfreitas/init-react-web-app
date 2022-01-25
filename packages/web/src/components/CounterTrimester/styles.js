import styled from 'styled-components'

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const CounterContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  width: 92px;
  height: 26px;
  left: 0px;
  top: 10px;
  background: linear-gradient(69.16deg, #2DD09F 24.98%, #2EFFC3 100%);
  border-radius: 5px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  color: #FFFFFF;
`
export const Texto = styled.span`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #7A3387;
  padding: 30px;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  justify-content: center;
  padding-left: 10%;
  @media only screen and (max-width: 1024px) {
    padding-left: 10%;
    padding-bottom: 50px;
  }
  
  min-width: 300px;
  align-items: center;
`
