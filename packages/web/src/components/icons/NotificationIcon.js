import React from 'react'

import PropTypes from 'prop-types'

const NotificationIcon = ({ size }) => (
    <svg width= { size } height= { size } viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16.5C11.7929 16.5 11.625 16.6679 11.625 16.875C11.625 17.0821 11.7929 17.25 12 17.25C12.2071 17.25 12.375 17.0821 12.375 16.875C12.375 16.6679 12.2071 16.5 12 16.5V16.5" stroke="#7D6382" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13.5V5.25" stroke="#7D6382" strokeWidth="1.5" strokeLinecap="round"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 23.25C18.2132 23.25 23.25 18.2132 23.25 12C23.25 5.7868 18.2132 0.75 12 0.75C5.7868 0.75 0.75 5.7868 0.75 12C0.75 18.2132 5.7868 23.25 12 23.25Z" stroke="#7D6382" strokeWidth="1.5"/>
    </svg>
  )

NotificationIcon.propTypes = { size: PropTypes.number }

NotificationIcon.defaultProps = { size: 24 }

export default NotificationIcon
