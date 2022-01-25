import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6563 19.4063L10.6077 15.1835C9.87857 14.4544 9.69805 13.3403 10.1596 12.4182V12.4182C10.5039 11.7296 11.1582 11.2485 11.9181 11.1252C12.6781 11.0019 13.4509 11.2515 13.9952 11.796L14.6563 12.457L15.3173 11.796C15.8618 11.2515 16.6348 11.002 17.3948 11.1252C18.1548 11.2485 18.8093 11.7296 19.1537 12.4182V12.4182C19.6146 13.3406 19.4338 14.4543 18.7049 15.1835L14.6563 19.4063Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.53125 14.6563H2.78125C2.12541 14.6563 1.59375 14.1246 1.59375 13.4688V3.98065C1.59375 3.32481 2.12541 2.79315 2.78125 2.79315H13.4688C14.1246 2.79315 14.6563 3.32481 14.6563 3.98065V7.53128" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.59375 6.34375H14.6563" stroke="${ color }" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M5.15063 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0881 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
