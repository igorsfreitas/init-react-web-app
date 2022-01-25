import PropTypes from 'prop-types'

const TrimesterUp = ({ width, height }) => (
  <svg width= { width } height= { height } viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3L4 1L1 3" stroke="#B3A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

TrimesterUp.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

TrimesterUp.defaultProps = {
  width: 8,
  height: 4
}

export default TrimesterUp
