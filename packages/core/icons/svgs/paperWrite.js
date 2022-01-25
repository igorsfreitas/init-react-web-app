import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8709 16.5301L8.77759 16.9718L9.21925 13.8784L17.1743 5.92345C17.9065 5.19121 19.0937 5.19121 19.8259 5.92345C20.5582 6.65568 20.5582 7.84288 19.8259 8.57511L11.8709 16.5301Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.37506 2.37427C5.37506 1.96005 5.71085 1.62427 6.12506 1.62427H10.8751C11.2893 1.62427 11.6251 1.96005 11.6251 2.37427V3.37427C11.6251 3.78848 11.2893 4.12427 10.8751 4.12427H6.12506C5.71085 4.12427 5.37506 3.78848 5.37506 3.37427V2.37427Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.6251 2.87427H14.1251C14.8154 2.87427 15.3751 3.43391 15.3751 4.12427" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.3751 16.6243V19.1243C15.3751 19.8146 14.8154 20.3743 14.1251 20.3743H2.87506C2.18471 20.3743 1.62506 19.8146 1.62506 19.1243V4.12427C1.62506 3.43391 2.18471 2.87427 2.87506 2.87427H5.37506" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.37506 7.87427H11.6251" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.37506 11.6243H7.87506" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
