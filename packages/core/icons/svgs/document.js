import colors from '@idea/styles/colors'

export default ({ size = 20, color = colors.darkPink2 } = {}) => `
<svg width="${ size }" height="${ size }" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.875 1.375H2.875C2.18464 1.375 1.625 1.93464 1.625 2.625V13.875C1.625 14.5654 2.18464 15.125 2.875 15.125H19.125C19.8154 15.125 20.375 14.5654 20.375 13.875V2.625C20.375 1.93464 19.8154 1.375 19.125 1.375H12.875Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.875 10.75C9.08312 10.75 10.0625 9.77062 10.0625 8.5625C10.0625 7.35438 9.08312 6.375 7.875 6.375C6.66688 6.375 5.6875 7.35438 5.6875 8.5625C5.6875 9.77062 6.66688 10.75 7.875 10.75Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.125 15.125C4.125 13.0539 5.80393 11.375 7.875 11.375C9.94607 11.375 11.625 13.0539 11.625 15.125H4.125Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.875 7.625H16.625" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.875 10.125H17.875" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
