import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.224 11.5001C22.9204 7.14369 19.9521 3.42995 15.7696 2.17382C11.5872 0.917688 7.06386 2.38145 4.41024 5.84975C1.75663 9.31806 1.52677 14.0668 3.833 17.7751L0.75 24.2501L7.225 21.1661C7.78768 21.5157 8.38195 21.8117 9 22.0501" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2499 24.2503L12.1359 18.9153C11.215 17.9947 10.9866 16.588 11.5689 15.4233V15.4233C12.004 14.5534 12.8307 13.9458 13.7907 13.79C14.7508 13.6343 15.7272 13.9496 16.4149 14.6373L17.2499 15.4723L18.0849 14.6373C18.7726 13.9496 19.749 13.6343 20.7091 13.79C21.6691 13.9458 22.4958 14.5534 22.9309 15.4233V15.4233C23.5132 16.588 23.2848 17.9947 22.3639 18.9153L17.2499 24.2503Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
