import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: inline-flex;
  width: ${ ({ size }) => size || '100%' };
  height: ${ ({ size }) => size || 'auto' };
`

export const Image = styled.img`
  ${ ({ size }) => !size && 'flex: 1;' }
  width: ${ ({ size }) => size || '100%' };
  height: ${ ({ size }) => size || 'auto' };
  border-radius: ${ ({ rounded }) => rounded ? '100%' : '15px' };
  object-fit: cover
`
