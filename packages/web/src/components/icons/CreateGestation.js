import PropTypes from 'prop-types'

const CreateGestation = ({ width, height }) => (
  <svg width= { width } height= { height } viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.72908 5.41351L7.84033 5.66667H7.846C7.98644 5.98411 8.11023 6.31142 8.23781 6.64876C8.71256 7.90406 9.2399 9.29841 10.8738 10.8414C11.4134 9.85482 12.4892 9.21347 13.6837 9.28837C14.2259 9.32297 14.7251 9.50134 15.1477 9.78284C15.4802 9.08092 15.9359 8.4233 16.5158 7.84344C19.2344 5.12484 23.658 5.12484 26.3766 7.84344C29.0952 10.5621 29.0952 14.9856 26.3766 17.7042C25.6768 18.4042 24.8363 18.9456 23.9157 19.2939C23.7078 21.8864 22.5941 24.3042 20.7419 26.1564L19.7558 27.1425C17.0371 29.8612 12.6135 29.861 9.89501 27.1425C8.2134 25.4609 7.78316 23.5202 7.71834 22.1883C7.70168 21.8451 7.70785 21.5111 7.73222 21.1938C6.88587 21.2421 6.06078 20.9399 5.44439 20.3236C4.27637 19.1556 4.27657 17.2653 5.44439 16.0975L5.51817 16.0238C6.90878 14.6331 8.91558 14.143 10.6541 14.645C10.5678 14.1455 10.5162 13.6393 10.5 13.1292C7.68262 11.0069 6.75886 8.42593 6.33606 7.24462C6.27752 7.08107 6.22858 6.94434 6.18555 6.83938C3.72049 9.51442 2.2124 13.0842 2.2124 17C2.2124 25.2753 8.94487 32.0078 17.2202 32.0078C25.4956 32.0078 32.228 25.2753 32.228 17C32.228 8.72465 25.4956 1.99219 17.2202 1.99219C17.1892 1.99219 16.8904 1.99219 16.5545 1.99219C16.0044 1.99219 15.5583 1.54622 15.5583 0.996094C15.5583 0.445966 16.0043 0 16.5544 0C16.8685 0 17.1521 0 17.2202 0C26.5802 0 34.2202 7.63944 34.2202 17C34.2202 26.36 26.5808 34 17.2202 34C7.86025 34 0.220215 26.3606 0.220215 17C0.220215 12.2521 2.18589 7.9468 5.34479 4.85671C6.09107 4.12668 7.29926 4.43544 7.71927 5.39119C7.7228 5.39842 7.72558 5.40626 7.72908 5.41351ZM13.3422 22.1468C13.0381 22.6052 12.3971 22.6011 12.008 22.2121C11.619 21.8231 11.6386 21.195 11.879 20.7001C12.1097 20.2251 12.2127 19.692 12.1691 19.1521C12.098 18.2726 11.6496 17.4807 10.9141 16.951C9.75217 16.1141 8.03809 16.3211 6.92685 17.4324L6.85307 17.5061C6.46373 17.8955 6.46373 18.5254 6.85307 18.9148C7.24148 19.3032 7.8734 19.3032 8.26181 18.9148L8.38305 18.7936C8.78238 18.3943 9.42982 18.3943 9.82915 18.7936L9.93888 18.9033C10.2368 19.2012 10.2695 19.6731 10.0155 20.0092C9.80908 20.3685 8.97721 23.4073 11.3037 25.7338C13.2456 27.6757 16.4052 27.6757 18.3471 25.7338L19.3332 24.7477C20.9667 23.1143 21.8981 20.9435 21.9561 18.6351C21.9574 18.5851 21.9576 18.5684 21.9607 18.3626C21.9624 18.245 21.965 18.0655 21.9693 17.7827L22.7035 17.5919C23.5592 17.3697 24.3422 16.9214 24.968 16.2956C26.9098 14.3538 26.9098 11.1941 24.968 9.25218C23.026 7.31027 19.8663 7.31033 17.9245 9.25218C15.9908 11.1859 15.978 14.3491 17.9245 16.2956C18.1649 16.536 18.4252 16.7489 18.7036 16.9329C19.1625 17.2364 19.4178 17.8086 19.2124 18.3189C19.0071 18.8293 18.4219 19.0828 17.9461 18.8066C17.4266 18.505 16.9479 18.1363 16.5159 17.7043C15.0438 16.2323 14.3693 14.2603 14.4914 12.3299C14.5237 11.7837 14.1058 11.3116 13.558 11.2766C13.0111 11.2421 12.5372 11.6608 12.5026 12.2095C12.4022 13.811 12.7294 15.3931 13.4485 16.8169C13.8456 17.4717 14.092 18.2134 14.1549 18.9917C14.2459 20.1166 13.9544 21.2243 13.3422 22.1468Z" fill="white"/>
  </svg>
)

CreateGestation.propTypes = { width: PropTypes.number, height: PropTypes.number }

CreateGestation.defaultProps = { width: '35', height: '34' }

export default CreateGestation
