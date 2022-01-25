import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2142 10.2476L16.4326 12.8751H18.8076C19.053 12.8655 19.278 13.011 19.37 13.2387C19.4619 13.4664 19.401 13.7274 19.2177 13.8908L17.1593 15.9199L18.2993 18.5426C18.4031 18.7887 18.3378 19.0735 18.1372 19.2499C17.9366 19.4262 17.6458 19.4545 17.415 19.3201L14.6592 17.7676L11.9027 19.3201C11.6719 19.4545 11.3811 19.4262 11.1805 19.2499C10.98 19.0735 10.9147 18.7887 11.0184 18.5426L12.1584 15.9199L10.1 13.8908C9.91683 13.7285 9.855 13.4687 9.94542 13.2412C10.0358 13.0138 10.2591 12.8674 10.5038 12.8751H12.8748L14.0956 10.2452C14.2059 10.0385 14.4213 9.90966 14.6556 9.91016C14.8899 9.91066 15.1047 10.0404 15.2142 10.2476Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.92088 14.6563H2.78125C2.12541 14.6563 1.59375 14.1246 1.59375 13.4688V3.96875C1.59375 3.31291 2.12541 2.78125 2.78125 2.78125H13.4688C14.1246 2.78125 14.6563 3.31291 14.6563 3.96875V7.53125" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.59375 6.34375H14.6563" stroke="${ color }" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M5.15088 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0884 3.96875V1.59375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
