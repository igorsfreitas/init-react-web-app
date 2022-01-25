import PropTypes from 'prop-types'

const InformativeIcon = ({ size }) => (
  <svg width={ size } height={ size } viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M17 9.56445C19.3472 9.56445 21.25 7.66166 21.25 5.31445C21.25 2.96724 19.3472 1.06445 17 1.06445C14.6528 1.06445 12.75 2.96724 12.75 5.31445C12.75 7.66166 14.6528 9.56445 17 9.56445Z" stroke="url(#informative-paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M22.3125 20.1895V17.002C22.3125 14.0679 19.934 11.6895 17 11.6895C14.066 11.6895 11.6875 14.0679 11.6875 17.002L11.6875 20.1895H13.8125L14.875 28.6895H19.125L20.1875 20.1895H22.3125Z" stroke="url(#informative-paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.375 11.6895C8.13541 11.6895 9.5625 10.2624 9.5625 8.50195C9.5625 6.74155 8.13541 5.31445 6.375 5.31445C4.61459 5.31445 3.1875 6.74155 3.1875 8.50195C3.1875 10.2624 4.61459 11.6895 6.375 11.6895Z" stroke="url(#informative-paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.075 14.0941C6.45362 13.5485 4.66874 13.8164 3.27897 14.8139C1.88919 15.8115 1.06432 17.4168 1.0625 19.1275L1.0625 20.19H3.1875L4.25 26.565H8.5L9.03267 23.369" stroke="url(#informative-paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M27.625 11.6895C29.3854 11.6895 30.8125 10.2624 30.8125 8.50195C30.8125 6.74155 29.3854 5.31445 27.625 5.31445C25.8646 5.31445 24.4375 6.74155 24.4375 8.50195C24.4375 10.2624 25.8646 11.6895 27.625 11.6895Z" stroke="url(#informative-paint4_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.925 14.0941C27.5463 13.5485 29.3312 13.8164 30.721 14.8139C32.1108 15.8115 32.9356 17.4168 32.9375 19.1275V20.19H30.8125L29.75 26.565H25.5L24.9673 23.369" stroke="url(#informative-paint5_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M32.9375 29.752C32.9375 31.5129 25.8017 32.9395 17 32.9395C8.19825 32.9395 1.0625 31.5129 1.0625 29.752" stroke="url(#informative-paint6_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="informative-paint0_linear" x1="15.6453" y1="9.56445" x2="22.6943" y2="2.50708" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="informative-paint1_linear" x1="15.3066" y1="28.6895" x2="27.9856" y2="20.7557" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="informative-paint2_linear" x1="5.35898" y1="11.6895" x2="10.6458" y2="6.39642" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="informative-paint3_linear" x1="3.77734" y1="26.565" x2="13.2867" y2="20.6129" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="informative-paint4_linear" x1="26.609" y1="11.6895" x2="31.8958" y2="6.39642" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="informative-paint5_linear" x1="27.6821" y1="26.565" x2="37.1915" y2="20.6129" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="informative-paint6_linear" x1="11.9199" y1="32.9395" x2="12.4428" y2="27.7049" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

InformativeIcon.propTypes = { size: PropTypes.number }

InformativeIcon.defaultProps = { size: 40 }

export default InformativeIcon
