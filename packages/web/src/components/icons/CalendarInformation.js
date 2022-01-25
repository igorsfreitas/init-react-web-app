import PropTypes from 'prop-types'
const CalendarInformation = ({ width, height }) => (
  <svg width={ width } height={ height } viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23 31C27.4183 31 31 27.4183 31 23C31 18.5817 27.4183 15 23 15C18.5817 15 15 18.5817 15 23C15 27.4183 18.5817 31 23 31Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 27V23" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 19C22.7239 19 22.5 19.2239 22.5 19.5C22.5 19.7761 22.7239 20 23 20C23.2761 20 23.5 19.7761 23.5 19.5C23.5 19.2239 23.2761 19 23 19V19" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 23H3C1.89543 23 1 22.1046 1 21V5.02002C1 3.91545 1.89543 3.02002 3 3.02002H21C22.1046 3.02002 23 3.91545 23 5.02002V11" stroke="url(#paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 9H23" stroke="url(#paint4_linear)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6.99048 5V1" stroke="url(#paint5_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.9905 5V1" stroke="url(#paint6_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="20.45" y1="31" x2="33.7187" y2="17.7155" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="23.4542" y1="27" x2="25.4464" y2="26.3351" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="22.9542" y1="20.3333" x2="24.0599" y2="19.2263" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="8.49375" y1="23" x2="24.9847" y2="4.82033" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint4_linear" x1="8.49375" y1="10.3333" x2="8.62713" y2="8.12995" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint5_linear" x1="7.44465" y1="5" x2="9.43684" y2="4.33515" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint6_linear" x1="17.4446" y1="5" x2="19.4368" y2="4.33515" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)
CalendarInformation.propTypes = { width: PropTypes.number, height: PropTypes.number }
CalendarInformation.defaultProps = { width: 32, height: 32 }

export default CalendarInformation
