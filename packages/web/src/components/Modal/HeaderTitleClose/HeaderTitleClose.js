import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle'

import CloseIconButton from '~/components/IconButton/CloseIconButton'
import FullScreenExitIconButton from '~/components/IconButton/FullScreenExitIconButton'
import FullScreenIconButton from '~/components/IconButton/FullScreenIconButton'

import useStyles from './styles'

const HeaderTitleClose = (props) => {
  const {
    title,
    disableTypography,
    titleClass,
    onClose,
    escape,
    containerClass,
    fullScreenButton,
    fullScreen,
    onChangeFullScreen
  } = props

  const classes = useStyles()

  const fullScreenIconButton = useMemo(() => {
    if (fullScreenButton) {
      let CustomButton = FullScreenIconButton
      if (fullScreen) {
        CustomButton = FullScreenExitIconButton
      }
      return <CustomButton size="small" className={ classes.fullScreenIcon } marginHorizontal marginVertical onClick={ onChangeFullScreen } />
    }
    return null
  }, [fullScreenButton, fullScreen, classes.fullScreenIcon, onChangeFullScreen])

  return (
    <div className={ [classes.header, containerClass].join(' ') }>
      <DialogTitle
        className={ [classes.title, titleClass].join(' ') }
        disableTypography={ disableTypography }
      >
        {title}
      </DialogTitle>
      <div
        style={ {
          position: 'absolute',
          width: '98%',
          display: 'flex',
          justifyContent: 'flex-end',
          paddingTop: 10
        } }
      >
        {fullScreenIconButton}
        {escape && (
          <CloseIconButton size="small" className={ classes.closeIcon } marginHorizontal marginVertical onClick={ onClose } />
        )}
      </div>
    </div>
  )
}

HeaderTitleClose.propTypes = {
  escape: PropTypes.bool.isRequired,
  disableTypography: PropTypes.bool,
  titleClass: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.bool]),
  onClose: PropTypes.func,
  containerClass: PropTypes.string,
  fullScreenButton: PropTypes.bool,
  fullScreen: PropTypes.bool.isRequired,
  onChangeFullScreen: PropTypes.func.isRequired
}

HeaderTitleClose.defaultProps = {
  disableTypography: false,
  title: null,
  titleClass: null,
  onClose () {},
  containerClass: null,
  fullScreenButton: false
}

export default HeaderTitleClose
