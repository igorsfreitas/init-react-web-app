import { useCallback } from 'react'

import I18n, { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import Button from '~/components/Button'
import Modal from '~/components/Modal'

const FilterModal = (props) => {
  const {
    onFilter,
    closeOnFilter,
    handleClose,
    ...rest
  } = props

  const t = useT()

  const handleFilter = useCallback(
    () => {
      if (closeOnFilter) {
        handleClose()
      }
      onFilter()
    },
    [onFilter, closeOnFilter, handleClose]
  )

  return (
    <Modal
      maxWidth="xs"
      fullWidth
      position="top-right"
      { ...rest }
      title={ t('filter', { howMany: 2 }) }
      FooterComponent={
        () => (
          <>
            <I18n as={ Button }
              color="primary"
              variant="outlined"
              onClick={ handleClose }
            >
              cancel
            </I18n>
            <I18n as={ Button }
              color="primary"
              variant="contained"
              onClick={ handleFilter }
              style={ { marginLeft: 10 } }
            >
              do filter
            </I18n>
          </>
        )
      }
    />
  )
}

FilterModal.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  closeOnFilter: PropTypes.bool
}

FilterModal.defaultProps = { closeOnFilter: true }

export default FilterModal
