import React from 'react'

import PropTypes from 'prop-types'

import InputImageCircle from '../InputImageCircle'
import {
  Container,
  Row,
  ProgressRow,
  CompletedCircularProgress
} from './styles'

const CircularProgress = ({
  value, title, ...props
}) => (
  <Container>
    <Row>
      <InputImageCircle
        value={ value }
        { ...props }
      ></InputImageCircle>
    </Row>

    <ProgressRow>
      <CompletedCircularProgress
        variant="determinate"
        color="secondary"
        value={ value }
        { ...props }
      />
    </ProgressRow>
  </Container>
)

CircularProgress.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
  title: PropTypes.string
}

CircularProgress.defaultProps = { title: null }

export default CircularProgress
