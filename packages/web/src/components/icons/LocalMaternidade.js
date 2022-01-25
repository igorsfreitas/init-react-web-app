import PropTypes from 'prop-types'
const LocalMaternidade = ({ width, height }) => (
  <svg width={ width } height={ height } viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23.5604 32C28.2214 32 32 28.3805 32 23.9158C32 19.451 28.2214 15.8315 23.5604 15.8315C18.8994 15.8315 15.1208 19.451 15.1208 23.9158C15.1208 28.3805 18.8994 32 23.5604 32Z" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27.2906 23.9156H23.5603V20.3438" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.752 0.402882C12.4899 0.213433 12.1358 0.213356 11.8736 0.40269L0.992965 8.25935C0.972999 8.27376 0.953757 8.28915 0.935306 8.30546C0.564586 8.63316 0.334903 9.09308 0.306178 9.59068C0.305347 9.60507 0.304932 9.61948 0.304932 9.6339V21.6316L0.304935 21.634C0.307993 22.5931 1.10942 23.3159 2.03098 23.3186L2.03317 23.3186H8.55676C8.97098 23.3186 9.30676 22.9829 9.30676 22.5686V17.5413C9.30676 16.0013 10.6196 14.6984 12.3077 14.6984C13.685 14.6984 14.8125 15.5657 15.181 16.7215C15.5444 16.3334 15.9368 15.9706 16.355 15.6363C15.619 14.1832 14.0686 13.1984 12.3077 13.1984C9.85263 13.1984 7.80676 15.1127 7.80676 17.5413V21.8186H2.03448C1.87793 21.8178 1.80558 21.7043 1.80493 21.6298V9.66179C1.81282 9.58662 1.84687 9.51088 1.9087 9.44828L12.3125 1.93597L22.7061 9.44785C22.7681 9.51078 22.8023 9.58684 22.8104 9.66243V13.1606C23.0583 13.145 23.3084 13.1371 23.5604 13.1371C23.8124 13.1371 24.0625 13.145 24.3104 13.1606V9.6339C24.3104 9.61913 24.31 9.60435 24.3091 9.5896C24.2797 9.09289 24.0505 8.63382 23.6808 8.30614C23.6622 8.28965 23.6428 8.2741 23.6227 8.25954L12.752 0.402882Z" fill="url(#paint2_linear)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="20.8703" y1="32" x2="34.2656" y2="17.9992" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="24.8309" y1="23.9156" x2="27.7901" y2="20.8215" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="8.4818" y1="23.3186" x2="27.5872" y2="3.40447" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>

)
LocalMaternidade.propTypes = { width: PropTypes.number, height: PropTypes.number }
LocalMaternidade.defaultProps = { width: 33, height: 33 }

export default LocalMaternidade
