import React from 'react'

import { useT } from '@meta-react/i18n'

import EyeClosedIcon from '~/components/icons/EyeClosedIcon'

import IconButton from '../IconButton'

const EyeClosedIconButton = (props) => {
  const t = useT()

  return (
    <IconButton tooltip={ t('exit fullscreen') } { ...props }>
      <EyeClosedIcon />
    </IconButton>
  )
}

export default EyeClosedIconButton
