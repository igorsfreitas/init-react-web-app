import openSansBold from './assets/fonts/OpenSans/OpenSans-Bold.ttf'
import openSansBlack from './assets/fonts/OpenSans/OpenSans-ExtraBold.ttf'
import openSansLight from './assets/fonts/OpenSans/OpenSans-Light.ttf'
import openSansRegular from './assets/fonts/OpenSans/OpenSans-Regular.ttf'
import openSansSemiBold from './assets/fonts/OpenSans/OpenSans-SemiBold.ttf'
import poppinsBold from './assets/fonts/Poppins/Poppins-Bold.ttf'
import poppinsLight from './assets/fonts/Poppins/Poppins-Light.ttf'
import poppinsMedium from './assets/fonts/Poppins/Poppins-Medium.ttf'
import poppinsRegular from './assets/fonts/Poppins/Poppins-Regular.ttf'
import poppinsSemiBold from './assets/fonts/Poppins/Poppins-SemiBold.ttf'
import poppinsThin from './assets/fonts/Poppins/Poppins-Thin.ttf'

const fontWeight = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  black: '900'
}

const fontFaceOpenSans = [
  {
    fontFamily: 'Open Sans',
    src: `url("${ openSansLight }") format("truetype")`,
    fontWeight: fontWeight.light
  },
  {
    fontFamily: 'Open Sans',
    src: `url("${ openSansRegular }") format("truetype")`,
    fontWeight: fontWeight.regular
  },
  {
    fontFamily: 'Open Sans',
    src: `url("${ openSansSemiBold }") format("truetype")`,
    fontWeight: fontWeight.semiBold
  },
  {
    fontFamily: 'Open Sans',
    src: `url("${ openSansBold }") format("truetype")`,
    fontWeight: fontWeight.bold
  },
  {
    fontFamily: 'Open Sans',
    src: `url("${ openSansBlack }") format("truetype")`,
    fontWeight: fontWeight.black
  }
]

const fontFacePoppins = [
  {
    fontFamily: 'Poppins',
    src: `url("${ poppinsThin }") format("truetype")`,
    fontWeight: fontWeight.thin
  },
  {
    fontFamily: 'Poppins',
    src: `url("${ poppinsLight }") format("truetype")`,
    fontWeight: fontWeight.light
  },
  {
    fontFamily: 'Poppins',
    src: `url("${ poppinsMedium }") format("truetype")`,
    fontWeight: fontWeight.medium
  },
  {
    fontFamily: 'Poppins',
    src: `url("${ poppinsRegular }") format("truetype")`,
    fontWeight: fontWeight.regular
  },
  {
    fontFamily: 'Poppins',
    src: `url("${ poppinsSemiBold }") format("truetype")`,
    fontWeight: fontWeight.semiBold
  },
  {
    fontFamily: 'Poppins',
    src: `url("${ poppinsBold }") format("truetype")`,
    fontWeight: fontWeight.bold
  }
]

const fontFamilyOpenSans = ['\'Open Sans\'', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen'].join(',')
const fontFamily = ['\'Poppins\'', '\'Open Sans\'', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen'].join(',')

export default {
  fontFaceOpenSans,
  fontFacePoppins,
  fontFamily,
  fontFamilyOpenSans,
  fontWeight
}
