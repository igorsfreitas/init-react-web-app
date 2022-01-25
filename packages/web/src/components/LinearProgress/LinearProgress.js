import React from 'react'

import PropTypes from 'prop-types'

import {
  Container,
  Text,
  Row,
  ProgressRow,
  CompletedLinearProgress
} from './styles'

const LinearProgress = ({
  value, title, ...props
}) => (
  <Container>
    <Row>
      <Text align="left">
        {title}
      </Text>
      <Text align="right">
        {value}%
      </Text>
    </Row>

    <ProgressRow>
      <CompletedLinearProgress
        variant="determinate"
        color="secondary"
        value={ value }
        { ...props }
      />
    </ProgressRow>
  </Container>
)

LinearProgress.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
  title: PropTypes.string
}

LinearProgress.defaultProps = { title: null }

export default LinearProgress
