import React from 'react'

import Button from '../Button/Button'

const ButtonNavigation = (props) => (
    <Button
      style={
        {
          height: 56, width: 120, background: '#FFFFFF', color: '#A877B1', borderRadius: '10px', fontWeight: '600', lineHeight: '15px', fontSize: '12px'
        }
      }
      { ...props }
    />
)

export default ButtonNavigation
