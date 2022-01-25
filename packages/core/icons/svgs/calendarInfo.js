import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6563 19.4063C17.2796 19.4063 19.4063 17.2796 19.4063 14.6563C19.4063 12.0329 17.2796 9.90625 14.6563 9.90625C12.0329 9.90625 9.90625 12.0329 9.90625 14.6563C9.90625 17.2796 12.0329 19.4063 14.6563 19.4063Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.6562 17.0313V14.6562" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.6563 12.2812C14.4923 12.2812 14.3594 12.4142 14.3594 12.5781C14.3594 12.7421 14.4923 12.875 14.6563 12.875C14.8202 12.875 14.9531 12.7421 14.9531 12.5781C14.9531 12.4142 14.8202 12.2812 14.6563 12.2812V12.2812" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.53125 14.6561H2.78125C2.12541 14.6561 1.59375 14.1244 1.59375 13.4686V3.98047C1.59375 3.32463 2.12541 2.79297 2.78125 2.79297H13.4688C14.1246 2.79297 14.6563 3.32463 14.6563 3.98047V7.53109" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.59375 6.34375H14.6563" stroke="${ color }" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M5.15088 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0884 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
