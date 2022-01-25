import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import startsWith from 'lodash/startsWith'

import { convertFileToBase64 } from '@idea/utils/file'

import { Container } from './styles'

const Dropzone = (props) => {
  const {
    onChange,
    value,
    onFilenameChange,
    children: Children,
    ...rest
  } = props

  const t = useT()

  const handleReceiveFile = useCallback(
    async ([file]) => {
      if (file && startsWith(file.type, 'image/')) {
        const fileEncoded = await convertFileToBase64(file)
        onChange(fileEncoded, file.name)
        onFilenameChange(file.name)
      }
    },
    [onChange, onFilenameChange]
  )

  const {
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop: handleReceiveFile,
    accept: 'image/*'
  })

  const {
    onClick: openSelectFile,
    ...rootProps
  } = getRootProps()

  return (
    <Container
      { ...rootProps }
      { ...rest }
      isDragActive={ isDragActive }
      dropText={ t('load picture') }
    >
      <input { ...getInputProps() } />

      <Children value={ value } openSelectFile={ openSelectFile } />

    </Container>
  )
}

Dropzone.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onFilenameChange: PropTypes.func,
  children: PropTypes.func
}

Dropzone.defaultProps = {
  onChange () {},
  value: '',
  onFilenameChange () {},
  children: () => null
}

export default Dropzone
