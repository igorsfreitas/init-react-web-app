import PropTypes from 'prop-types'

const EditPencil = ({ size }) => (
  <svg width= { size } height= { size } viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M13.9442 2.05599C13.5429 1.65638 12.9986 1.43371 12.4323 1.43755C11.866 1.44138 11.3247 1.6714 10.9289 2.07641L2.47058 10.5347L1.4375 14.5627L5.46542 13.5296L13.9238 5.07124C14.3288 4.67543 14.5588 4.13416 14.5626 3.56787C14.5664 3.00158 14.3438 2.45725 13.9442 2.05599Z" stroke="#D8D4D9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6868 2.31836L13.6816 5.31319" stroke="#D8D4D9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.46533 3.54004L12.4602 6.53487" stroke="#D8D4D9" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.4707 10.5352L5.46845 13.5271" stroke="#D8D4D9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

EditPencil.propTypes = { size: PropTypes.number }

EditPencil.defaultProps = { size: 16 }

export default EditPencil
