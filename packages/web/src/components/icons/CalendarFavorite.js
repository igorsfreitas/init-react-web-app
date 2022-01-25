import PropTypes from 'prop-types'
const CalendarFavorite = ({ width, height }) => (
  <svg width={ width } height={ height } viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23.9401 15.5746L25.9921 19.9999H29.9921C30.4054 19.9837 30.7844 20.2287 30.9392 20.6123C31.0941 20.9958 30.9915 21.4353 30.6827 21.7106L27.2161 25.1279L29.1361 29.5453C29.3108 29.9597 29.2008 30.4394 28.863 30.7364C28.5252 31.0333 28.0354 31.0809 27.6467 30.8546L23.0054 28.2399L18.3627 30.8546C17.9741 31.0809 17.4842 31.0333 17.1465 30.7364C16.8087 30.4394 16.6987 29.9597 16.8734 29.5453L18.7934 25.1279L15.3267 21.7106C15.0182 21.4372 14.914 20.9997 15.0663 20.6166C15.2186 20.2335 15.5947 19.9869 16.0067 19.9999H20.0001L22.0561 15.5706C22.2419 15.2225 22.6047 15.0055 22.9993 15.0064C23.3938 15.0072 23.7557 15.2258 23.9401 15.5746Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.972 23H3C1.89543 23 1 22.1046 1 21V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V11" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 9H23" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M6.99048 5V1" stroke="url(#paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.9905 5V1" stroke="url(#paint4_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="20.4517" y1="30.9966" x2="33.7123" y2="17.701" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="8.49375" y1="23" x2="25.0028" y2="4.81855" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="8.49375" y1="10.3333" x2="8.62713" y2="8.12995" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="7.44465" y1="5" x2="9.43684" y2="4.33515" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint4_linear" x1="17.4446" y1="5" x2="19.4368" y2="4.33515" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>

)
CalendarFavorite.propTypes = { width: PropTypes.number, height: PropTypes.number }
CalendarFavorite.defaultProps = { width: 32, height: 32 }

export default CalendarFavorite
