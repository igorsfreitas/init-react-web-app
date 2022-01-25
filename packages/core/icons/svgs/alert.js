import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 14.75C10.8274 14.75 10.6875 14.8899 10.6875 15.0625C10.6875 15.2351 10.8274 15.375 11 15.375C11.1726 15.375 11.3125 15.2351 11.3125 15.0625C11.3125 14.8899 11.1726 14.75 11 14.75V14.75" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 12.25V5.375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 20.375C16.1777 20.375 20.375 16.1777 20.375 11C20.375 5.82233 16.1777 1.625 11 1.625C5.82233 1.625 1.625 5.82233 1.625 11C1.625 16.1777 5.82233 20.375 11 20.375Z" stroke="${ color }" stroke-width="1.5"/>
  </svg>
`
