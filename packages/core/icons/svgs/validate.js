import colors from '@idea/styles/colors'

export default ({ size = 20, color = colors.white } = {}) => `
<svg width="${ size }" height="${ size }" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 12.004H24.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 15.754L24.25 12.004L20.5 8.25403" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7501 16.5V21C16.7857 21.7902 16.1761 22.4606 15.3861 22.5H3.11307C2.32346 22.4601 1.7144 21.7898 1.75007 21V3C1.71384 2.20998 2.3232 1.53937 3.11307 1.5H15.3861C16.1761 1.53938 16.7857 2.20981 16.7501 3V7.5" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
