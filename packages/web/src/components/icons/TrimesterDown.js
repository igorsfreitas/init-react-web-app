import PropTypes from 'prop-types'

const TrimesterDown = ({ width, height }) => (
  <svg width= { width } height= { height } viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L4 3L1 1" stroke="#B3A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

)

TrimesterDown.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}

TrimesterDown.defaultProps = {
  width: 8,
  height: 4
}

export default TrimesterDown
