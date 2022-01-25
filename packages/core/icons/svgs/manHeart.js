import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6562 9.90625L10.6077 5.68271C9.87843 4.95392 9.69789 3.84003 10.1596 2.91821V2.91821C10.5037 2.22949 11.1579 1.7482 11.9179 1.62476C12.6778 1.50132 13.4508 1.75077 13.9952 2.29517L14.6562 2.95621L15.3173 2.29517C15.8619 1.75078 16.6349 1.50134 17.395 1.62478C18.155 1.74821 18.8094 2.22947 19.1537 2.91821V2.91821C19.6147 3.84027 19.4339 4.95387 18.7048 5.68271L14.6562 9.90625Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15625 6.34375C6.46793 6.34375 7.53125 5.28043 7.53125 3.96875C7.53125 2.65707 6.46793 1.59375 5.15625 1.59375C3.84457 1.59375 2.78125 2.65707 2.78125 3.96875C2.78125 5.28043 3.84457 6.34375 5.15625 6.34375Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5.15625 7.53125V12.2813" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.9375 19.4063L7.53125 13.4688H8.71875V11.0938C8.71875 9.12624 7.12376 7.53125 5.15625 7.53125C3.18874 7.53125 1.59375 9.12624 1.59375 11.0938V13.4688H2.78125L3.375 19.4063H6.9375Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
