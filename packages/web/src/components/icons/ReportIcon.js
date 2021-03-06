import PropTypes from 'prop-types'

const ReportIcon = ({ size }) => (
  <svg width={ size } height={ size } viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18.4805 26.4005L13.2218 27.1513L13.9726 21.8927L27.4961 8.36915C28.7409 7.12435 30.7592 7.12435 32.004 8.36915C33.2488 9.61395 33.2488 11.6322 32.004 12.877L18.4805 26.4005Z" stroke="url(#report-paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.4375 1.81055C7.4375 1.39633 7.77329 1.06055 8.1875 1.06055H17.3125C17.7267 1.06055 18.0625 1.39633 18.0625 1.81055V4.56055C18.0625 4.97476 17.7267 5.31055 17.3125 5.31055H8.1875C7.77329 5.31055 7.4375 4.97476 7.4375 4.56055V1.81055Z" stroke="url(#report-paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.0625 3.18555H22.3125C23.4861 3.18555 24.4375 4.13694 24.4375 5.31055" stroke="url(#report-paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.4375 26.5605V30.8105C24.4375 31.9842 23.4861 32.9355 22.3125 32.9355H3.1875C2.01389 32.9355 1.0625 31.9842 1.0625 30.8105V5.31055C1.0625 4.13694 2.01389 3.18555 3.1875 3.18555H7.4375" stroke="url(#report-paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.4375 11.6855H18.0625" stroke="url(#report-paint4_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.4375 18.0605H11.6875" stroke="url(#report-paint5_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="report-paint0_linear" x1="19.9375" y1="27.1513" x2="36.2877" y2="10.7817" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="report-paint1_linear" x1="11.0566" y1="5.31055" x2="13.4853" y2="-0.768184" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="report-paint2_linear" x1="20.234" y1="5.31055" x2="21.2903" y2="2.13773" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="report-paint3_linear" x1="9.02461" y1="32.9355" x2="33.0025" y2="14.0735" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="report-paint4_linear" x1="11.0566" y1="13.1022" x2="11.3641" y2="10.7935" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="report-paint5_linear" x1="8.88516" y1="19.4772" x2="9.58939" y2="17.362" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

ReportIcon.propTypes = { size: PropTypes.number }

ReportIcon.defaultProps = { size: 40 }

export default ReportIcon
