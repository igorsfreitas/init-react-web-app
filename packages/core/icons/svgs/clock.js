import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 18.1006C14.0909 18.1006 17.8125 14.379 17.8125 9.78809C17.8125 5.19722 14.0909 1.47559 9.5 1.47559C4.90913 1.47559 1.1875 5.19722 1.1875 9.78809C1.1875 14.379 4.90913 18.1006 9.5 18.1006Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.5 9.78809V6.81934" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M9.5 9.78809L13.2105 13.4994" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
