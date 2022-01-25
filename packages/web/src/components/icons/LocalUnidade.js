import PropTypes from 'prop-types'
const LocalUnidade = ({ width, height }) => (
  <svg width={ width } height={ height } viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6213 0.405174C12.3579 0.21267 12.0002 0.212591 11.7366 0.40498L0.974238 8.26163C0.954301 8.27619 0.935095 8.29172 0.91669 8.30817C0.548993 8.63676 0.32294 9.09617 0.294677 9.59115C0.293864 9.60538 0.293457 9.61964 0.293457 9.6339V21.6316L0.293461 21.634C0.296461 22.5855 1.08536 23.3159 2.00885 23.3186L2.01106 23.3186H8.46375C8.87796 23.3186 9.21375 22.9829 9.21375 22.5686V17.5413C9.21375 15.9937 10.5162 14.6984 12.1739 14.6984C13.5299 14.6984 14.6481 15.5651 15.0103 16.7276C15.3728 16.3356 15.7645 15.9694 16.1821 15.6323C15.4532 14.1838 13.9214 13.1984 12.1739 13.1984C9.73349 13.1984 7.71375 15.1203 7.71375 17.5413V21.8186H2.01242C1.86942 21.8178 1.79412 21.7118 1.79346 21.6299V9.66136C1.80137 9.58412 1.83578 9.50779 1.89632 9.44567L12.1786 1.93947L22.4509 9.44523C22.5116 9.50769 22.5462 9.58435 22.5543 9.662V13.1611C22.8022 13.1452 23.0523 13.1371 23.3043 13.1371C23.5564 13.1371 23.8065 13.1452 24.0543 13.1611V9.6339C24.0543 9.61929 24.0539 9.60467 24.053 9.59008C24.0241 9.09597 23.7985 8.63742 23.4319 8.30885C23.4133 8.29222 23.3939 8.27653 23.3738 8.26183L12.6213 0.405174Z" fill="url(#paint0_linear)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.6523 32C28.2626 32 32.0001 28.3805 32.0001 23.9158C32.0001 19.451 28.2626 15.8315 23.6523 15.8315C19.0419 15.8315 15.3044 19.451 15.3044 23.9158C15.3044 28.3805 19.0419 32 23.6523 32Z" stroke="url(#paint1_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.6523 27.9576V23.9155" stroke="url(#paint2_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.6524 19.8735C23.3642 19.8735 23.1306 20.0997 23.1306 20.3788C23.1306 20.6578 23.3642 20.8841 23.6524 20.8841C23.9405 20.8841 24.1741 20.6578 24.1741 20.3788C24.1741 20.0997 23.9405 19.8735 23.6524 19.8735V19.8735" stroke="url(#paint3_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="8.387" y1="23.3186" x2="27.4995" y2="3.60007" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="20.9914" y1="32" x2="34.3924" y2="18.1456" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint2_linear" x1="24.1263" y1="27.9576" x2="26.1914" y2="27.246" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
      <linearGradient id="paint3_linear" x1="23.6045" y1="21.2209" x2="24.7213" y2="20.0664" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A877B1"/>
        <stop offset="1" stopColor="#D799E3"/>
      </linearGradient>
    </defs>
  </svg>

)
LocalUnidade.propTypes = { width: PropTypes.number, height: PropTypes.number }
LocalUnidade.defaultProps = { width: 33, height: 33 }

export default LocalUnidade
