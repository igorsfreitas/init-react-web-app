import PropTypes from 'prop-types'

const ExamsIcon = ({ size }) => (
  <svg width={ size } height={ size } viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7501 27.3421C11.9203 28.1716 10.5752 28.1716 9.74535 27.3421L2.1251 19.7204C1.29554 18.8906 1.29554 17.5455 2.1251 16.7157L17.0001 1.84208C17.3986 1.44311 17.9393 1.21887 18.5032 1.21875H26.122C27.2956 1.21875 28.247 2.17014 28.247 3.34375V10.9626C28.2476 11.5268 28.0239 12.068 27.6251 12.4671" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.9346 6C22.6412 6 22.4033 6.23785 22.4033 6.53125C22.4033 6.82465 22.6412 7.0625 22.9346 7.0625C23.228 7.0625 23.4658 6.82465 23.4658 6.53125C23.4658 6.23785 23.228 6 22.9346 6V6" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.9972 32.7792L16.7538 25.217C15.4492 23.9128 15.1256 21.92 15.9505 20.27V20.27C16.5666 19.0378 17.7375 18.1768 19.0973 17.9562C20.4572 17.7356 21.8402 18.1822 22.8143 19.1565L23.9972 20.3394L25.1815 19.1565C26.1555 18.1822 27.5385 17.7356 28.8984 17.9562C30.2583 18.1768 31.4292 19.0378 32.0453 20.27V20.27C32.8702 21.92 32.5466 23.9128 31.242 25.217L23.9972 32.7792Z" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="10.6126" y1="27.9643" x2="32.7926" y2="5.75919" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="22.8859" y1="7.41667" x2="24.0607" y2="6.24044" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="21.2886" y1="32.7792" x2="33.5164" y2="18.7914" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

ExamsIcon.propTypes = { size: PropTypes.number }

ExamsIcon.defaultProps = { size: 40 }

export default ExamsIcon
