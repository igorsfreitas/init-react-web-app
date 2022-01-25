import React from 'react'

import { useT } from '@meta-react/i18n'

import FullScreenIcon from '~/components/icons/FullScreenIcon'

import IconButton from '../IconButton'

const FullScreenIconButton = (props) => {
  const t = useT()

  return (
    <IconButton tooltip={ t('active fullscreen') } { ...props }>
      <FullScreenIcon />
    </IconButton>
  )
}

export default FullScreenIconButton
