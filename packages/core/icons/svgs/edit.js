import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3403 1.15971C13.9123 0.733464 13.3317 0.495962 12.7276 0.500052C12.1236 0.504142 11.5463 0.749485 11.1241 1.18149L2.10194 10.2036L1 14.5L5.29639 13.3981L14.3185 4.37594C14.7505 3.95375 14.9959 3.3764 14.9999 2.77237C15.004 2.16833 14.7665 1.58772 14.3403 1.15971Z" stroke="${ color }" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.8655 1.43896L14.0599 4.63342" stroke="${ color }" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.56299 2.74219L12.7574 5.93664" stroke="${ color }" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2.10181 10.2036L5.29937 13.395" stroke="${ color }" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
