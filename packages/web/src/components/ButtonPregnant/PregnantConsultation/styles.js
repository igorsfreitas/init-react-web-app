import styled from 'styled-components'

export const Container = styled.div`
  height: 700px;
  width: 75%;    
  background-image: linear-gradient(white, transparent);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-left 10px;
  margin-right 330px;
  right: 250px;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`
export const FilterText = styled.text`
  font-family: Open Sans;
  font-size: 12px;
  line-height: 140%;
  color: #8C7F8C;
  margin-right: 5px;
`
export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  margin-left: auto;
  margin-right: auto;
`
