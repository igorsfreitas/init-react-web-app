import React, {
  useState,
  useEffect
} from 'react'

import clsx from 'clsx'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

import { useModal } from '@idea/use-modal'

import LinearLoader from '~/components/LinearLoader'

import HeaderTitleClose from './HeaderTitleClose/HeaderTitleClose'
import useStyles from './styles'

const Modal = (props) => {
  const {
    contentText,
    children,
    id,
    open,
    escape,
    loading,
    title,
    onClose,
    FooterComponent,
    position,
    headerProps,
    fullScreen,
    disableFullScreen,
    maxWidth,
    breakFullScreen,
    hideHeader,
    contentContainerStyle,
    escapeWhenLoading,
    footerContainerStyle,
    ...otherProps
  } = props

  const classes = useStyles()

  const [fullScreenState, setFullScreenState] = useState(fullScreen)

  useEffect(() => {
    setFullScreenState(fullScreen)
  }, [fullScreen])

  const { removeModal } = useModal()

  const close = () => {
    removeModal({ id })
    onClose()
  }

  const componentsProps = {
    onClose: close,
    title,
    escape: escape && (escapeWhenLoading || !loading)
  }

  return (
    <Dialog
      id={ id }
      open={ open }
      onClose={ close }
      disableEscapeKeyDown={ !componentsProps.escape }
      disableBackdropClick={ !componentsProps.escape }
      disableRestoreFocus
      disableEnforceFocus
      maxWidth={ maxWidth }
      fullScreen={ fullScreenState }
      classes={ {
        scrollPaper: clsx({
          [classes.dialogCenter]: position === 'center',
          [classes.dialogCenterRight]: position === 'center-right',
          [classes.dialogCenterLeft]: position === 'center-left',
          [classes.dialogTopCenter]: position === 'top-center',
          [classes.dialogTopRight]: position === 'top-right',
          [classes.dialogTopLeft]: position === 'top-left',
          [classes.dialogBottomCenter]: position === 'bottom-center',
          [classes.dialogBottomRight]: position === 'bottom-right',
          [classes.dialogBottomLeft]: position === 'bottom-left'
        }),
        ...(otherProps.classes || {})
      } }
      { ...otherProps }
    >
      {!hideHeader && (
        <HeaderTitleClose
          fullScreen={ fullScreenState }
          onChangeFullScreen={ () => setFullScreenState((old) => !old) }
          fullScreenButton={ !disableFullScreen }
          { ...componentsProps }
          { ...headerProps }
        />
      )}

      <DialogContent
        classes={ { root: clsx({ [classes.withoutFooter]: !FooterComponent }) } }
        style={ contentContainerStyle }
      >
        <div className={ classes.contentText }>{contentText}</div>
        {children}
      </DialogContent>

      {FooterComponent && (
        <DialogActions style={ footerContainerStyle } classes={ { root: classes.footerContainer } }>
          <FooterComponent { ...componentsProps } />
        </DialogActions>
      )}
      {loading !== undefined && (
        <LinearLoader loading={ loading } value={ 0 } />
      )}
    </Dialog>
  )
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.bool]),
  FooterComponent: PropTypes.func,
  contentText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  escape: PropTypes.bool,
  loading: PropTypes.bool,
  escapeWhenLoading: PropTypes.bool,
  fullScreen: PropTypes.bool,
  position: PropTypes.oneOf([
    'center',
    'center-right',
    'center-left',
    'top-center',
    'top-right',
    'top-left',
    'bottom-center',
    'bottom-right',
    'bottom-left'
  ]),
  headerProps: PropTypes.object,
  breakFullScreen: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disableFullScreen: PropTypes.bool,
  hideHeader: PropTypes.bool,
  contentContainerStyle: PropTypes.object,
  footerContainerStyle: PropTypes.object
}

Modal.defaultProps = {
  title: null,
  FooterComponent: null,
  contentText: null,
  children: null,
  escape: true,
  loading: undefined,
  fullScreen: false,
  escapeWhenLoading: false,
  onClose () {},
  position: 'center',
  headerProps: {},
  maxWidth: 'sm',
  breakFullScreen: 'xs',
  disableFullScreen: true,
  hideHeader: false,
  contentContainerStyle: {},
  footerContainerStyle: {}
}

export default Modal
