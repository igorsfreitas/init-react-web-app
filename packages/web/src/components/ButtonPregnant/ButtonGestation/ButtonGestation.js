import React from 'react'

import CreateGestation from '~/components/icons/CreateGestation.js'
import Button from '~components/Button'

const ButtonGestation = (props) => (
  <Button
    style={
      {
        height: 92, width: 216, background: '#76B7BA', margin: '20%', color: '#ffff', borderRadius: '10px', padding: '30px', fontWeight: '600', lineHeight: '19px'
      }
    }
    startIcon={ <CreateGestation /> }
    { ...props }
  />
)

export default ButtonGestation
