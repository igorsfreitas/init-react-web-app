
import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.67374 0.994285C8.41028 0.801781 8.05259 0.801703 7.78905 0.994091L1.39888 5.65898C1.37894 5.67353 1.35974 5.68906 1.34133 5.70551C1.06402 5.95333 0.892321 6.30105 0.870849 6.6771C0.870036 6.69134 0.869629 6.70559 0.869629 6.71985V13.8435L0.869633 13.8458C0.871971 14.5875 1.48527 15.1478 2.19193 15.1499L2.19414 15.1499H6.02543C6.43964 15.1499 6.77543 14.8141 6.77543 14.3999V11.4149C6.77543 10.6734 7.40304 10.0316 8.22832 10.0316C8.97813 10.0316 9.56477 10.5614 9.6658 11.2144C10.0117 10.794 10.4111 10.4168 10.8539 10.0924C10.3595 9.15866 9.35895 8.53156 8.22832 8.53156C6.62035 8.53156 5.27543 9.79997 5.27543 11.4149V13.6499H2.36963V6.80749L8.23106 2.52858L14.087 6.80743V8.84055C14.3332 8.81363 14.5834 8.79979 14.837 8.79979C15.0906 8.79979 15.3409 8.81362 15.587 8.84055V6.71985C15.587 6.70524 15.5866 6.69063 15.5857 6.67604C15.5638 6.30081 15.3925 5.95389 15.1161 5.7062C15.0975 5.68957 15.0782 5.67387 15.058 5.65917L8.67374 0.994285Z" fill="${ color }"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0434 19.9999C17.7808 19.9999 20 17.8509 20 15.1999C20 12.5489 17.7808 10.3999 15.0434 10.3999C12.306 10.3999 10.0869 12.5489 10.0869 15.1999C10.0869 17.8509 12.306 19.9999 15.0434 19.9999Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.0435 17.6V15.2" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.0434 12.8C14.8723 12.8 14.7336 12.9344 14.7336 13.1C14.7336 13.2657 14.8723 13.4 15.0434 13.4C15.2145 13.4 15.3532 13.2657 15.3532 13.1C15.3532 12.9344 15.2145 12.8 15.0434 12.8V12.8" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
