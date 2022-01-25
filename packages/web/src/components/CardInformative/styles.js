import styled from 'styled-components'

// TODO imagem não estava no repositório
// import bgInformative from '~/assets/images/informative-bar.png'

export const InformativeImage = styled.img`
  width: 295px;
  height: 204px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: 293px 204px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: 50px;
`

export const Informative = styled.div`
  margin-top: 120px;
  width: 100%;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 60px;
  padding-left: 20px;
  `
/* background-image: url( '${ bgInformative }' ); */

export const InformativeTitle = styled.a`
  color: #6A515E;
  font-weight: 600;
  font-style: normal;
  font-size: 12px;
  line-height: 120%;
  `

export const InformativeSince = styled.p`
    color: #D7BDCA;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 140%;
  `
