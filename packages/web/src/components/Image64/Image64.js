import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import startsWith from 'lodash/startsWith'

import {
  Image,
  ImageContainer
} from './styles'

const Image64 = ({
  uri, rounded, size, ...rest
}) => {
  const url = useMemo(
    () => {
      if (startsWith(uri, 'data:image')) {
        return uri
      }
      return `data:image/jpg;base64,${ uri }`
    },
    [uri]
  )

  return (
    <ImageContainer { ...rest }>
      <Image src={ url } rounded={ rounded } size={ size }/>
    </ImageContainer>
  )
}

Image64.propTypes = {
  uri: PropTypes.string.isRequired, rounded: PropTypes.bool, size: PropTypes.string
}

Image64.defaultProps = { rounded: false, size: undefined }

export default Image64
