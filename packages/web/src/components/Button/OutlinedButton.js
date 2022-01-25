import React from 'react'

import { Button } from '@material-ui/core'

import './styles.css'

const EditButton = (props) => (
  <Button
    variant="outlined"
    className="btn"
    { ...props }
  />
)

export default EditButton
