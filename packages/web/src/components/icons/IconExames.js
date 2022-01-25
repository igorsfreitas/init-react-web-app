import PropTypes from 'prop-types'

const IconExames = ({ width, height }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width= { width } height= { height } viewBox="0 0 33 34" fill="none">
    <rect opacity="0.05" x="0.353516" y="1" width="32" height="32" rx="7" fill="#495ECA"/>
    <path d="M13.8533 23.0833C13.3652 23.5713 12.5739 23.5713 12.0858 23.0833L7.60329 18.5999C7.11531 18.1118 7.11531 17.3206 7.60329 16.8324L16.3533 8.08328C16.5877 7.84859 16.9058 7.71668 17.2375 7.71661H21.7191C22.4095 7.71661 22.9691 8.27626 22.9691 8.96661V13.4483C22.9695 13.7801 22.8379 14.0985 22.6033 14.3333" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.8437 10.5291C19.6712 10.5291 19.5312 10.669 19.5312 10.8416C19.5312 11.0142 19.6712 11.1541 19.8437 11.1541C20.0163 11.1541 20.1562 11.0142 20.1562 10.8416C20.1562 10.669 20.0163 10.5291 19.8437 10.5291V10.5291" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path filLRule="evenodd" clipRule="evenodd" d="M20.4692 26.2817L16.2084 21.8333C15.441 21.0661 15.2506 19.8939 15.7359 18.9233V18.9233C16.0983 18.1985 16.787 17.6921 17.587 17.5623C18.3869 17.4325 19.2004 17.6952 19.7734 18.2683L20.4692 18.9642L21.1659 18.2683C21.7388 17.6952 22.5524 17.4325 23.3523 17.5623C24.1522 17.6921 24.841 18.1985 25.2034 18.9233V18.9233C25.6886 19.8939 25.4983 21.0661 24.7309 21.8333L20.4692 26.2817Z" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="12.596" y1="23.4493" x2="25.643" y2="10.3875" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="19.8151" y1="11.3624" x2="20.5062" y2="10.6705" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="18.8759" y1="26.2817" x2="26.0687" y2="18.0535" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

IconExames.propTypes = { width: PropTypes.number, height: PropTypes.number }

IconExames.defaultProps = { width: 33, height: 34 }

export default IconExames
