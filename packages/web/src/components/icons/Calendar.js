import PropTypes from 'prop-types'

const Kids = ({ height, width }) => (
  <svg width={ width } height={ height } viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23.0001 31.0001L16.1814 23.8881C14.9534 22.66 14.6494 20.7838 15.4267 19.2308V19.2308C16.0065 18.071 17.1086 17.2607 18.3885 17.0531C19.6683 16.8454 20.97 17.2658 21.8867 18.1828L23.0001 19.2961L24.1134 18.1828C25.0304 17.2658 26.3322 16.8455 27.6123 17.0531C28.8923 17.2607 29.9946 18.071 30.5747 19.2308V19.2308C31.3509 20.7842 31.0464 22.66 29.8187 23.8881L23.0001 31.0001Z" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 23H3C1.89543 23 1 22.1046 1 21V5.02002C1 3.91545 1.89543 3.02002 3 3.02002H21C22.1046 3.02002 23 3.91545 23 5.02002V11" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 9H23" stroke="#A877B1" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6.99072 5V1" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.9907 5V1" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

Kids.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Kids.defaultProps = {
  height: 30,
  width: 30
}

export default Kids
