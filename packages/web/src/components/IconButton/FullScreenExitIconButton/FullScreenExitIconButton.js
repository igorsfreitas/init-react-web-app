import React from 'react'

import { useT } from '@meta-react/i18n'

import FullScreenExitIcon from '~/components/icons/FullScreenExitIcon'

import IconButton from '../IconButton'

const FullScreenExitIconButton = (props) => {
  const t = useT()

  return (
    <IconButton tooltip={ t('exit fullscreen') } { ...props }>
      <FullScreenExitIcon />
    </IconButton>
  )
}

export default FullScreenExitIconButton
