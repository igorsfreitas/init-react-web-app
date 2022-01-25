import styled from 'styled-components'

export const ButtonIcon = styled.div`
margin-right: 5px;
`

export const Header = styled.div`
  height: 104px;
  width: 75%;
  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
  background-image: linear-gradient(white, transparent);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-left: 10px;
  margin-right: 330px;
  right: 250px;
  flex-direction: column;
  margin-top: 25px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  `

export const HeaderButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: absolute;
  top: 25px;
  padding-right: 15%; 
  width: 75%; 
  padding-left: 15%; 
  @media only screen and (max-width: 1024px) {
    padding-left: 5%;
    width: 100%;
  }
  min-width: 397px; 
`
export const Text = styled.div`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 120%;
  color: #7A3387;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  justify-content: center;
  padding-left: 10%;
  @media only screen and (max-width: 1024px) {
    padding-left: 10%;
  }
  padding-bottom: 50px;
  min-width: 300px;
  align-items: center;
`
