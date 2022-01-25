import PropTypes from 'prop-types'

const IconResumo = ({ width, height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width= { width } height= { height } viewBox="0 0 33 34" fill="none">
    <rect opacity="0.05" x="0.417969" y="1" width="32" height="32" rx="7" fill="#495ECA"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.2008 22.5301L14.1074 22.9717L14.5491 19.8784L22.5041 11.9234C23.2363 11.1911 24.4235 11.1911 25.1558 11.9234C25.888 12.6556 25.888 13.8428 25.1558 14.5751L17.2008 22.5301Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.7051 8.37421C10.7051 7.95999 11.0409 7.62421 11.4551 7.62421H16.2051C16.6193 7.62421 16.9551 7.95999 16.9551 8.37421V9.37421C16.9551 9.78842 16.6193 10.1242 16.2051 10.1242H11.4551C11.0409 10.1242 10.7051 9.78842 10.7051 9.37421V8.37421Z" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.9551 8.87421H19.4551C20.1454 8.87421 20.7051 9.43385 20.7051 10.1242" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20.7051 22.6242V25.1242C20.7051 25.8146 20.1454 26.3742 19.4551 26.3742H8.20508C7.51472 26.3742 6.95508 25.8146 6.95508 25.1242V10.1242C6.95508 9.43385 7.51472 8.87421 8.20508 8.87421H10.7051" stroke="url(#paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.7051 13.8742H16.9551" stroke="url(#paint4_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.7051 17.6242H13.2051" stroke="url(#paint5_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="18.0578" y1="22.9717" x2="27.6756" y2="13.3425" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="12.834" y1="10.1242" x2="14.2626" y2="6.54848" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="18.2324" y1="10.1242" x2="18.8538" y2="8.25785" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="11.6387" y1="26.3742" x2="25.7433" y2="15.2789" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint4_linear" x1="12.834" y1="14.7075" x2="13.0148" y2="13.3495" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint5_linear" x1="11.5566" y1="18.4575" x2="11.9709" y2="17.2133" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

IconResumo.propTypes = { width: PropTypes.number, height: PropTypes.number }

IconResumo.defaultProps = { width: 34, height: 34 }

export default IconResumo
