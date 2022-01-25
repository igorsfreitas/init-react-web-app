import React from 'react'

import {
  InformativeImage,
  Informative,
  InformativeTitle,
  InformativeSince
} from './styles'

const CardInformative = ({ }) => (
  <div>
    <InformativeImage src= { 'https://image.freepik.com/fotos-gratis/pes-do-bebe-nas-maos-da-mae_1112-1463.jpg' } >
      <Informative>
        <InformativeTitle href= { 'google.com' } >Como está seu bebê?</InformativeTitle>
        <InformativeSince>1 dia atrás</InformativeSince>
      </Informative>
    </InformativeImage>
  </div>
)

export default CardInformative
