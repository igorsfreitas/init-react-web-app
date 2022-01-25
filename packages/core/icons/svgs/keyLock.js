import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.white } = {}) => `
<svg width="${ size }" height="${ size }" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 20.375C5.50571 20.375 6.625 19.2557 6.625 17.875C6.625 16.4943 5.50571 15.375 4.125 15.375C2.74429 15.375 1.625 16.4943 1.625 17.875C1.625 19.2557 2.74429 20.375 4.125 20.375Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.625 17.875H12.875V19.75" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.375 17.875V19.125" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.625 13.5V10.375C6.625 9.68464 7.18464 9.125 7.875 9.125H19.125C19.8154 9.125 20.375 9.68464 20.375 10.375V19.125C20.375 19.8154 19.8154 20.375 19.125 20.375H15.375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.125 9.125V6C9.125 3.58375 11.0838 1.625 13.5 1.625C15.9162 1.625 17.875 3.58375 17.875 6V9.125" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.5 12.875V15.375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
