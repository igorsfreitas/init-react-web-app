import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3'

import { Container } from './styles'

const ReCAPTCHA = ({
  sitekey, onChange, ...props
}) => (
  <Container>
    {!!sitekey && (
      <GoogleReCaptchaProvider reCaptchaKey={ sitekey }>
        <GoogleReCaptcha onVerify={ onChange } { ...props } />
      </GoogleReCaptchaProvider>
    )}
  </Container>
)

ReCAPTCHA.propTypes = GoogleReCaptcha.propTypes

export default ReCAPTCHA
