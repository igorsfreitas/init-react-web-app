import PropTypes from 'prop-types'

const NotificationsIcon = ({ size }) => (
  <svg width={ size } height={ size } viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.9007 14.8769C32.4706 8.70527 28.2655 3.44413 22.3403 1.66462C16.4152 -0.114899 10.0071 1.95876 6.24785 6.87219C2.48856 11.7856 2.16293 18.5129 5.43008 23.7665L1.0625 32.9394L10.2354 28.5704C11.0325 29.0657 11.8744 29.485 12.75 29.8227" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24.4374 32.9385L17.1926 25.3806C15.888 24.0763 15.5644 22.0836 16.3893 20.4336V20.4336C17.0057 19.2013 18.1769 18.3404 19.537 18.1198C20.897 17.8992 22.2802 18.3458 23.2545 19.3201L24.4374 20.503L25.6203 19.3201C26.5946 18.3458 27.9778 17.8992 29.3379 18.1198C30.698 18.3404 31.8691 19.2013 32.4855 20.4336V20.4336C33.3104 22.0836 32.9869 24.0763 31.6823 25.3806L24.4374 32.9385Z" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="11.9074" y1="32.9394" x2="38.3655" y2="6.50482" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="21.7279" y1="32.9385" x2="33.9516" y2="18.9502" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

NotificationsIcon.propTypes = { size: PropTypes.number }

NotificationsIcon.defaultProps = { size: 40 }

export default NotificationsIcon
