import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.4759 23.2498C19.7427 19.5863 16.0528 17.25 11.9999 17.25C7.94701 17.25 4.25719 19.5863 2.52393 23.2498" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.25C11.9994 8.14927 9.64927 10.4994 6.75 10.5C6.75 13.3995 9.10051 15.75 12 15.75C14.8995 15.75 17.25 13.3995 17.25 10.5C14.3505 10.5 12 8.14949 12 5.25Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17.8359 19.027C19.0029 18.8302 20.1417 18.4921 21.2269 18.02C21.974 17.6843 22.3136 16.8114 21.9899 16.059L20.6139 12.849C20.3738 12.2888 20.2499 11.6856 20.2499 11.076V9C20.2499 4.44365 16.5563 0.75 11.9999 0.75C7.44358 0.75 3.74992 4.44365 3.74992 9V11.076C3.74993 11.6856 3.62609 12.2888 3.38592 12.849L2.00992 16.059C1.68623 16.8114 2.02587 17.6843 2.77292 18.02C3.85818 18.4921 4.9969 18.8302 6.16392 19.027" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`
