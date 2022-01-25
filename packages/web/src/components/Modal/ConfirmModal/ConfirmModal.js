import React, { useCallback } from 'react'

import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import Button from '~/components/Button'
import Modal from '~/components/Modal'

import useStyles, {
  Row,
  Content,
  TextWarning
} from './styles'

const ConfirmModal = ({
  id,
  open,
  handleClose,
  onConfirm,
  onNegative,
  textButtonOnConfirm,
  textButtonOnNegative,
  text,
  title
}) => {
  const classes = useStyles()

  const closeModal = useCallback(
    () => {
      onNegative()
      handleClose()
    },
    [handleClose, onNegative]
  )

  const submitModal = useCallback(
    () => {
      onConfirm()
      handleClose()
    },
    [handleClose, onConfirm]
  )

  return (
    <Modal
      id={ id }
      open={ open }
      title={
        <Row>
          {title || <I18n>warning</I18n>}
        </Row>
      }
      disableFullScreen
      contentContainerStyle={ { padding: 24 } }
      headerProps={ { titleClass: classes.title } }
      FooterComponent={ () => (
        <>
          <Button
            onClick={ closeModal }
            variant="outlined"
            color="secondary"
          >
            {textButtonOnNegative ? <p>{textButtonOnNegative}</p> : <I18n>no</I18n>}
          </Button>
          <Button
            onClick={ submitModal }
            color="secondary"
            style={ { marginLeft: 8 } }
          >
            {textButtonOnConfirm ? <p>{textButtonOnConfirm}</p> : <I18n>yes</I18n>}
          </Button>
        </>
      ) }
    >
      <>
        <Content>
          <TextWarning>{text}</TextWarning>
        </Content>
      </>
    </Modal>
  )
}

ConfirmModal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func,
  onNegative: PropTypes.func,
  title: PropTypes.string,
  text: PropTypes.string,
  textButtonOnConfirm: PropTypes.string,
  textButtonOnNegative: PropTypes.string
}

ConfirmModal.defaultProps = {
  title: '',
  textButtonOnConfirm: '',
  textButtonOnNegative: '',
  onNegative () {},
  onConfirm () {},
  text: ''
}

export default ConfirmModal
