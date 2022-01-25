import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.75C13.6569 6.75 15 5.40685 15 3.75C15 2.09315 13.6569 0.75 12 0.75C10.3431 0.75 9 2.09315 9 3.75C9 5.40685 10.3431 6.75 12 6.75Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 14.25V12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12V14.25H9.75L10.5 20.25H13.5L14.25 14.25H15.75Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 8.25C5.74264 8.25 6.75 7.24264 6.75 6C6.75 4.75736 5.74264 3.75 4.5 3.75C3.25736 3.75 2.25 4.75736 2.25 6C2.25 7.24264 3.25736 8.25 4.5 8.25Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.7 9.94701C4.5555 9.56186 3.29558 9.75095 2.31457 10.4551C1.33355 11.1593 0.751285 12.2924 0.75 13.5V14.25H2.25L3 18.75H6L6.376 16.494" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 8.25C20.7426 8.25 21.75 7.24264 21.75 6C21.75 4.75736 20.7426 3.75 19.5 3.75C18.2574 3.75 17.25 4.75736 17.25 6C17.25 7.24264 18.2574 8.25 19.5 8.25Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M18.3 9.94701C19.4445 9.56186 20.7044 9.75095 21.6855 10.4551C22.6665 11.1593 23.2487 12.2924 23.25 13.5V14.25H21.75L21 18.75H18L17.624 16.494" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M23.25 21C23.25 22.243 18.213 23.25 12 23.25C5.787 23.25 0.75 22.243 0.75 21" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
