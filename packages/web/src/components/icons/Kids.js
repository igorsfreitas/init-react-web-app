import PropTypes from 'prop-types'

const Kids = ({ height, width }) => (
  <svg width={ width } height={ height } viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8 9C10.2091 9 12 7.20914 12 5C12 2.79086 10.2091 1 8 1C5.79086 1 4 2.79086 4 5C4 7.20914 5.79086 9 8 9Z" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.324 14.9932C12.9183 12.0377 9.65269 10.4503 6.46018 11.1707C3.26767 11.8911 1.0002 14.7271 1 17.9999V20.9999H4L5 30.9999H11L11.696 24.0452" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.0002 31L16.1828 23.8867C14.955 22.6592 14.6504 20.7836 15.4268 19.2307V19.2307C16.0064 18.0707 17.1083 17.2601 18.3882 17.0522C19.6681 16.8443 20.9699 17.2645 21.8868 18.1813L23.0002 19.2947L24.1148 18.1813C25.0317 17.2645 26.3335 16.8443 27.6135 17.0522C28.8934 17.2601 29.9953 18.0707 30.5748 19.2307V19.2307C31.3512 20.7836 31.0467 22.6592 29.8188 23.8867L23.0002 31Z" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M22 8C23.933 8 25.5 6.433 25.5 4.5C25.5 2.567 23.933 1 22 1C20.067 1 18.5 2.567 18.5 4.5C18.5 6.433 20.067 8 22 8Z" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27.1999 12.0001C26.2314 10.3237 24.5135 9.2176 22.5866 9.0298C20.6597 8.84201 18.7605 9.59555 17.4866 11.0534" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

Kids.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Kids.defaultProps = {
  height: 30,
  width: 30
}

export default Kids
