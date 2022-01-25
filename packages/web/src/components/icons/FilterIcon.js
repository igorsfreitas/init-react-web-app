import PropTypes from 'prop-types'

const FilterIcon = ({ size, color }) => (
  <svg width={ size } height={ size } viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M20.3333 1.71159C20.3446 1.53909 20.284 1.3696 20.1659 1.24333C20.0479 1.11706 19.8828 1.04524 19.71 1.04492H2.24997C2.07702 1.045 1.91183 1.11674 1.79372 1.24307C1.6756 1.3694 1.61511 1.53902 1.62664 1.71159C1.92784 5.90556 4.98366 9.38645 9.1033 10.2283V18.4574C9.10339 18.6999 9.24368 18.9204 9.46324 19.0232C9.6828 19.126 9.94202 19.0926 10.1283 18.9374L12.6283 16.8541C12.771 16.7355 12.8535 16.5596 12.8533 16.3741V10.2283C16.9744 9.38802 20.032 5.90667 20.3333 1.71159Z" stroke="url(#shape-paint0_linear)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="shape-paint0_linear" x1="7.99813" y1="19.0822" x2="22.9457" y2="3.55923" gradientUnits="userSpaceOnUse">
        <stop stopColor={ color || '#A877B1' }/>
        <stop offset="1" stopColor={ color || '#D799E3' }/>
      </linearGradient>
    </defs>
  </svg>
)

FilterIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

FilterIcon.defaultProps = {
  size: 40,
  color: '#A877B1'
}

export default FilterIcon
