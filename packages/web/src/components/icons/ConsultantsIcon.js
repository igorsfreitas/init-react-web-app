import PropTypes from 'prop-types'

const ConsultantsIcon = ({ size }) => (
  <svg width={ size } height={ size } viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.0625 5.06152C1.0625 2.85238 2.85336 1.06152 5.0625 1.06152H28.9375C31.1466 1.06152 32.9375 2.85238 32.9375 5.06152V28.9365C32.9375 31.1457 31.1466 32.9365 28.9375 32.9365H5.0625C2.85336 32.9365 1.0625 31.1457 1.0625 28.9365V5.06152Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 6.37402L10.625 14.874L6.375 10.624" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.1875 11.6865H26.5625" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 19.124L10.625 27.624L6.375 23.374" stroke="url(#paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.1875 24.4365H26.5625" stroke="url(#paint4_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="11.9199" y1="32.9365" x2="38.3538" y2="6.47137" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="9.99414" y1="14.874" x2="16.8694" y2="6.26971" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="22.359" y1="13.1032" x2="22.856" y2="10.8638" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="9.99414" y1="27.624" x2="16.8694" y2="19.0197" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint4_linear" x1="22.359" y1="25.8532" x2="22.856" y2="23.6138" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

ConsultantsIcon.propTypes = { size: PropTypes.number }

ConsultantsIcon.defaultProps = { size: 40 }

export default ConsultantsIcon
