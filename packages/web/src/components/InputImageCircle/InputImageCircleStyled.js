import {
  useCallback,
  useMemo,
  useState
} from 'react'
import { useDropzone } from 'react-dropzone'

import I18n, { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import startsWith from 'lodash/startsWith'

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import InfoIcon from '@material-ui/icons/Info'

import { defaultProfileImage } from '@idea/constants/images'
import { convertFileToBase64 } from '@idea/utils/file'

import CancelButton from '~/components/Button/CancelButton'
import SaveButton from '~/components/Button/SaveButton'

import useStyles, {
  Container,
  Cell,
  Label,
  Border,
  GridContainer
} from './styles'

const InputImageCircle = (props) => {
  const {
    label,
    onChange,
    value,
    defaultImage,
    error,
    required,
    onFilenameChange,
    ...rest
  } = props

  const t = useT()
  const classes = useStyles()
  const mobile = useMediaQuery('(max-width:534px)')

  const [hover, setHover] = useState(false)

  const helperText = useMemo(
    () => (error) && (
      <Box component="span" display="flex" alignItems="center" style={ { marginTop: 3 } }>
        <InfoIcon color="error" fontSize="small" style={ { marginRight: '8px' } } />
        {' '}
        <Label error>
          { error }
        </Label>
      </Box>
    ),
    [error]
  )

  const handleReceiveFile = useCallback(
    async ([file]) => {
      if (file && startsWith(file.type, 'image/')) {
        const fileEncoded = await convertFileToBase64(file)
        onChange(fileEncoded)
        onFilenameChange(file.name)
      }
    },
    [onChange, onFilenameChange]
  )

  const handleRemove = useCallback(
    () => {
      onChange(defaultImage)
      onFilenameChange()
    },
    [defaultImage, onChange, onFilenameChange]
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
    onClick: handleSelectFile,
    ...rootProps
  } = getRootProps()

  return (
    <Container
      { ...rootProps }
      isDragActive={ isDragActive }
      dropText={ t('load picture') }
      onMouseEnter={ () => setHover(true) }
      onMouseLeave={ () => setHover(false) }
    >
      <input { ...getInputProps() } />

      <GridContainer { ...rest } >
        <Cell
          style={ {
            gridColumnStart: 1,
            gridColumnEnd: !mobile ? 2 : 3,
            gridRowStart: 1,
            gridRowEnd: 2
          } }
        >
          <Label $error={ !!error }>
            {label}{required && ' *'}
          </Label>
        </Cell>

        <Cell
          style={ {
            gridColumnStart: 2,
            gridColumnEnd: 3,
            gridRowStart: !mobile ? 1 : 2,
            gridRowEnd: 3
          } }
        >
          <Card className={ classes.card }>
            <CardMedia
              className={ classes.image }
              image={ value || defaultImage }
            />
          </Card>
        </Cell>

        <Cell
          style={ {
            gridGap: !mobile ? 10 : 5,
            paddingBottom: !mobile ? 15 : 10,
            paddingRight: 5,
            flexWrap: true,
            display: mobile ? 'inline-grid' : 'flex'
          } }
        >
          <I18n
            as={ SaveButton }
            variant="outlined"
            style={ { fontSize: 14 } }
            onClick={ handleSelectFile }
          >
            choose
          </I18n>

          <I18n
            as={ CancelButton }
            variant="outlined"
            onClick={ handleRemove }
            disabled={ !value || value === defaultImage }
          >
            remove
          </I18n>
        </Cell>

      </GridContainer>

      <Border hover={ hover } error={ !!error } />

      {helperText}

    </Container>
  )
}

InputImageCircle.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  defaultImage: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  onFilenameChange: PropTypes.func
}

InputImageCircle.defaultProps = {
  label: null,
  onChange () {},
  value: '',
  defaultImage: defaultProfileImage,
  error: null,
  required: false,
  onFilenameChange () {}
}

export default InputImageCircle
