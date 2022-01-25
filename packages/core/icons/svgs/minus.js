import colors from '@idea/styles/colors'

export default ({ size, color = colors.darkPink2 } = {}) => `
<svg width="${ size }" height="${ size }" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.44043 0.550522C0.888145 0.550522 0.44043 0.998237 0.44043 1.55052C0.44043 2.10281 0.888145 2.55052 1.44043 2.55052V0.550522ZM9.06726 2.55052C9.61954 2.55052 10.0673 2.10281 10.0673 1.55052C10.0673 0.998237 9.61954 0.550522 9.06726 0.550522V2.55052ZM1.44043 2.55052H9.06726V0.550522H1.44043V2.55052Z" fill="${ color }"/>
</svg>
`
