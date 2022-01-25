import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.71332 3.12427C1.71332 2.29584 2.38489 1.62427 3.21332 1.62427H18.9633C19.7917 1.62427 20.4633 2.29584 20.4633 3.12427V18.8743C20.4633 19.7027 19.7917 20.3743 18.9633 20.3743H3.21332C2.38489 20.3743 1.71332 19.7027 1.71332 18.8743V3.12427Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0883 4.74927L7.33832 9.74927L4.83832 7.24927" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9633 7.87427H16.7133" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0883 12.2493L7.33832 17.2493L4.83832 14.7493" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.9633 15.3743H16.7133" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
