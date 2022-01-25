import PropTypes from 'prop-types'

import ExamIcon from '../icons/ExamIcon'
import './styles.css'
import {
  Container,
  TypeColor,
  Title,
  Subtitle,
  Wrapper
} from './styles'

const Consultation = (props) => (
  <Wrapper>
    <TypeColor className= { props.class }>
      <ExamIcon/>
    </TypeColor>
    <Container>
      <div className="half">
        <Title> { props.type } </Title>
        { props.class === false ? null : <Subtitle> { props.information } </Subtitle> }
      </div>
    </Container>
  </Wrapper>
)

Consultation.propTypes = {
  type: PropTypes.string,
  information: PropTypes.string,
  class: PropTypes.bool
}

Consultation.defaultProps = {
  type: 'Enfermagem',
  information: 'Sem informação',
  class: false
}

export default Consultation
