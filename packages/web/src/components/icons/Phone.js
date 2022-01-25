import PropTypes from 'prop-types'

const Kids = ({ height, width }) => (
  <svg width={ width } height={ height } viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.65625 19.375L11.8172 17.7539C12.263 17.42 12.8264 17.2842 13.3754 17.3783C13.9243 17.4723 14.4104 17.788 14.7196 18.2512V18.2512C15.173 18.9318 15.173 19.8182 14.7196 20.4987L12.5948 23.6852C11.9425 24.6636 11.0089 25.4211 9.91717 25.8578L6.75 27.125V30.0312" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.625 12.5938L5.975 14.5842C4.6033 15.1724 3.51043 16.2658 2.92279 17.6377L1.40767 21.1833C1.09728 21.9074 0.937324 22.687 0.9375 23.4747V30.0312" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.625 18.6491V4.84375C10.625 2.70365 12.3599 0.96875 14.5 0.96875H24.1875C26.3276 0.96875 28.0625 2.70365 28.0625 4.84375V26.1562C28.0625 28.2964 26.3276 30.0312 24.1875 30.0312H14.5C12.3599 30.0312 10.625 28.2964 10.625 26.1562V25.5104" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.1931 24.2188H28.0625" stroke="#A877B1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

Kids.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Kids.defaultProps = {
  height: 29,
  width: 27
}

export default Kids
