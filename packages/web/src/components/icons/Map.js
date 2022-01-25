import PropTypes from 'prop-types'

const Kids = ({ height, width }) => (
  <svg width={ width } height={ height } viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47715 21 11C21 15.5427 14.2347 26.9333 11.8333 30.5533C11.6481 30.8326 11.3352 31.0006 11 31.0006C10.6648 31.0006 10.3519 30.8326 10.1667 30.5533C7.76533 26.9333 1 15.5427 1 11C1 5.47715 5.47715 1 11 1Z" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="9.40625" y1="16" x2="17.6992" y2="7.69721" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="7.8125" y1="31.0006" x2="30.7884" y2="15.6655" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>

)

Kids.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Kids.defaultProps = {
  height: 32,
  width: 22
}

export default Kids
