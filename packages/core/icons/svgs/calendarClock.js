import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.53125 14.6563H2.78125C2.12541 14.6563 1.59375 14.1246 1.59375 13.4688V3.96875C1.59375 3.31291 2.12541 2.78125 2.78125 2.78125H13.4688C14.1246 2.78125 14.6563 3.31291 14.6563 3.96875V7.53125" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.59375 6.34375H14.6563" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.15625 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0938 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6563 19.4063C17.2796 19.4063 19.4063 17.2796 19.4063 14.6563C19.4063 12.0329 17.2796 9.90625 14.6563 9.90625C12.0329 9.90625 9.90625 12.0329 9.90625 14.6563C9.90625 17.2796 12.0329 19.4063 14.6563 19.4063Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16.7557 14.6563H14.6562V12.5576" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
