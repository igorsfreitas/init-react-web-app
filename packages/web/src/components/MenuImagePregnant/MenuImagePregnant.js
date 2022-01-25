
import React from 'react'
import { useSelector } from 'react-redux'

import { CircularProgress } from '@material-ui/core'

import { selectCurrentGestation } from '@idea/stores/gestation/gestation.selectors'
import { selectUser } from '@idea/stores/user/user.selectors'

import Image64 from '~/components/Image64/Image64'

import { Container } from './styles'

const MenuImagePregnant = () => {
  const gestacao = useSelector(selectCurrentGestation)
  const user = useSelector(selectUser)

  return user?.dsFoto ? (
    <Container>
      <div className="pregnant-image">
        <Image64 size="100px" rounded uri={ `data:image/jpeg;base64, ${ user.dsFoto }` } />
      </div>
      {gestacao?.semana && (
        <div className="pregnant-image">
          <CircularProgress
            size={ 116 } variant="determinate" value={ gestacao?.semana } thickness={ 2.0 } style={ { color: '#FCCE59', strokeLinecap: 'round' } }
          />
        </div>
      )}
    </Container>) : <></>
}

export default MenuImagePregnant
