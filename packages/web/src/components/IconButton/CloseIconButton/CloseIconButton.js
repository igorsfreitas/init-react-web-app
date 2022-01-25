import React from 'react'

import { useT } from '@meta-react/i18n'

import CloseIcon from '~/components/icons/CloseIcon'

import IconButton from '../IconButton'

const CloseIconButton = (props) => {
  const t = useT()

  return (
    <IconButton tooltip={ t('close') } { ...props }>
      <CloseIcon />
    </IconButton>
  )
}

export default CloseIconButton
