import colors from '@idea/styles/colors'

export default ({ size = 20, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.1068 18.4375C14.8069 15.6898 12.0395 13.9376 8.99982 13.9376C5.96014 13.9376 3.19277 15.6898 1.89282 18.4375" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.9375C8.99959 7.11195 7.23695 8.87459 5.0625 8.875C5.0625 11.0496 6.82538 12.8125 9 12.8125C11.1746 12.8125 12.9375 11.0496 12.9375 8.875C10.7629 8.875 9 7.11212 9 4.9375Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M13.3769 15.2703C14.2522 15.1227 15.1062 14.8691 15.9201 14.515C16.4804 14.2632 16.7352 13.6085 16.4924 13.0443L15.4604 10.6367C15.2803 10.2166 15.1874 9.76417 15.1874 9.307V7.75C15.1874 4.33274 12.4171 1.5625 8.99988 1.5625C5.58262 1.5625 2.81238 4.33274 2.81238 7.75V9.307C2.81238 9.76417 2.7195 10.2166 2.53938 10.6367L1.50738 13.0443C1.26461 13.6085 1.51934 14.2632 2.07963 14.515C2.89358 14.8691 3.74762 15.1227 4.62288 15.2703" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

`
