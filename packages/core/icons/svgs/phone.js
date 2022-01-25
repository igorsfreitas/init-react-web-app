import colors from '@idea/styles/colors'

export default ({ size = 20, color = colors.darkPink2 } = {}) => `
<svg width="${ size }" height="${ size }" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.19159 16.7135L11.0557 15.3151C11.4402 15.0271 11.9263 14.9099 12.3998 14.9911C12.8733 15.0722 13.2927 15.3445 13.5594 15.7441V15.7441C13.9505 16.3312 13.9505 17.0958 13.5594 17.6829L11.7265 20.4317C11.1638 21.2756 10.3584 21.9291 9.41667 22.3058L6.68457 23.3989V25.9059" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0276 10.8638L6.0164 12.5808C4.83313 13.0882 3.89039 14.0314 3.38347 15.2148L2.07648 18.2734C1.80873 18.898 1.67075 19.5705 1.6709 20.2501V25.9059" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0273 16.0873V4.17837C10.0273 2.33225 11.5239 0.835678 13.37 0.835678H21.7268C23.5729 0.835678 25.0695 2.33225 25.0695 4.17837V22.5632C25.0695 24.4093 23.5729 25.9059 21.7268 25.9059H13.37C11.5239 25.9059 10.0273 24.4093 10.0273 22.5632V22.0061" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.3799 20.8919H25.0693" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
