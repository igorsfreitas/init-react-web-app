import PropTypes from 'prop-types'

const ProfileIcon = ({ size }) => (
  <svg width={ size } height={ size } viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.4245 32.9392C26.969 27.7491 21.7418 24.4395 16.0001 24.4395C10.2585 24.4395 5.03127 27.7491 2.57581 32.9392" stroke="url(#profile-paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M16 7.43945C15.9992 11.5467 12.6698 14.8762 8.5625 14.877C8.5625 18.9846 11.8924 22.3145 16 22.3145C20.1076 22.3145 23.4375 18.9846 23.4375 14.877C19.3299 14.877 16 11.5471 16 7.43945Z" stroke="url(#profile-paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24.2677 26.9569C25.921 26.6781 27.5342 26.1991 29.0717 25.5303C30.13 25.0547 30.6111 23.818 30.1526 22.7522L28.2032 18.2047C27.863 17.411 27.6876 16.5565 27.6876 15.693V12.752C27.6876 6.29712 22.4549 1.06445 16.0001 1.06445C9.54525 1.06445 4.31258 6.29712 4.31258 12.752V15.693C4.31258 16.5565 4.13714 17.411 3.79691 18.2047L1.84758 22.7522C1.38901 23.818 1.87017 25.0547 2.92849 25.5303C4.46594 26.1991 6.07913 26.6781 7.73241 26.9569" stroke="url(#profile-paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="profile-paint0_linear" x1="11.7211" y1="32.9392" x2="15.7737" y2="20.123" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="profile-paint1_linear" x1="13.6293" y1="22.3145" x2="25.9651" y2="9.96405" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="profile-paint2_linear" x1="11.4337" y1="26.9569" x2="32.794" y2="3.292" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>
)

ProfileIcon.propTypes = { size: PropTypes.number }

ProfileIcon.defaultProps = { size: 40 }

export default ProfileIcon
