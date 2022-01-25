import React from 'react'

import Button from '../Button/Button'
import CreateGestation from '../icons/CreateGestation.js'

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
