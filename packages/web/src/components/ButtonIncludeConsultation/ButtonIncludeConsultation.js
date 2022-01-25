import React from 'react'

import { Button } from '@material-ui/core'

const ButtonIncludeConsultation = (props) => (
    <Button disableElevation variant="outlined"
      style={
        {
          height: '30px', minWidth: '100px', padding: '16px', borderColor: '#7A3387', color: '#7A3387', borderRadius: '30px', fontWeight: '500', lineHeight: '17px', fontSize: '12px', marginTop: '16px'
        }
      }
      { ...props }
    />
)

export default ButtonIncludeConsultation
