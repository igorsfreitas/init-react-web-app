import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C14.0711 12 15.75 10.3211 15.75 8.25C15.75 6.17893 14.0711 4.5 12 4.5C9.92893 4.5 8.25 6.17893 8.25 8.25C8.25 10.3211 9.92893 12 12 12Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.75C16.1421 0.75 19.5 4.10786 19.5 8.25C19.5 11.657 14.426 20.2 12.625 22.915C12.486 23.1245 12.2514 23.2504 12 23.2504C11.7486 23.2504 11.514 23.1245 11.375 22.915C9.574 20.2 4.5 11.657 4.5 8.25C4.5 4.10786 7.85786 0.75 12 0.75Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
