import PropTypes from 'prop-types'

const ExamIcon = ({ height, width }) => (
  <svg width= { width } height= { height } viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.50002 17.0835C7.01189 17.5714 6.22064 17.5714 5.73252 17.0835L1.25002 12.6001C0.762039 12.112 0.762039 11.3208 1.25002 10.8326L10 2.08346C10.2344 1.84877 10.5525 1.71687 10.8842 1.7168H15.3658C16.0562 1.7168 16.6158 2.27644 16.6158 2.9668V7.44846C16.6162 7.78033 16.4846 8.09872 16.25 8.33346" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.4908 4.5293C13.3183 4.5293 13.1783 4.66921 13.1783 4.8418C13.1783 5.01439 13.3183 5.1543 13.4908 5.1543C13.6634 5.1543 13.8033 5.01439 13.8033 4.8418C13.8033 4.66921 13.6634 4.5293 13.4908 4.5293V4.5293" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.1158 20.2822L9.85499 15.8339C9.08757 15.0667 8.89724 13.8945 9.38249 12.9239V12.9239C9.74487 12.199 10.4336 11.6926 11.2336 11.5628C12.0335 11.4331 12.847 11.6958 13.42 12.2689L14.1158 12.9647L14.8125 12.2689C15.3854 11.6958 16.199 11.4331 16.9989 11.5628C17.7988 11.6926 18.4876 12.199 18.85 12.9239V12.9239C19.3352 13.8945 19.1449 15.0667 18.3775 15.8339L14.1158 20.2822Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

ExamIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

ExamIcon.defaultProps = {
  height: 18,
  width: 18
}

export default ExamIcon
