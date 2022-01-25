import colors from '@idea/styles/colors'

export default ({ size = 22, color = colors.darkPink2 } = {}) => `
  <svg width="${ size }" height="${ size }" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.39867 6.75C8.04352 6.75 9.37693 5.40685 9.37693 3.75C9.37693 2.09315 8.04352 0.75 6.39867 0.75C4.75382 0.75 3.42041 2.09315 3.42041 3.75C3.42041 5.40685 4.75382 6.75 6.39867 6.75Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.1074 11.2452C10.0607 9.02858 7.62926 7.83803 5.25223 8.37834C2.8752 8.91865 1.18691 11.0456 1.18677 13.5002V15.7502H3.42046L4.16503 23.2502H8.63242L9.15064 18.0342" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5672 23.25L12.4913 17.915C11.5771 16.9944 11.3503 15.5877 11.9284 14.423V14.423C12.3599 13.553 13.1804 12.9451 14.1333 12.7892C15.0863 12.6332 16.0556 12.9483 16.7383 13.636L17.5672 14.471L18.3972 13.636C19.0799 12.9483 20.0492 12.6332 21.0021 12.7892C21.9551 12.9451 22.7756 13.553 23.2071 14.423V14.423C23.7851 15.5877 23.5584 16.9944 22.6442 17.915L17.5672 23.25Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8225 6C18.2618 6 19.4285 4.82475 19.4285 3.375C19.4285 1.92525 18.2618 0.75 16.8225 0.75C15.3833 0.75 14.2166 1.92525 14.2166 3.375C14.2166 4.82475 15.3833 6 16.8225 6Z" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M20.6944 8.99993C19.9733 7.74263 18.6942 6.91308 17.2595 6.77223C15.8247 6.63138 14.4107 7.19654 13.4622 8.28993" stroke="${ color }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

`
