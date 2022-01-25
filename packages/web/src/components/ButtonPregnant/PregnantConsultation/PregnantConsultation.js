import ButtonFilter from '~/components/ButtonFilter'
import ButtonIncludeConsultation from '~/components/ButtonIncludeConsultation'
import Consultation from '~/components/Consultation'

import {
  Container,
  FilterText,
  Filters
} from './styles'

const PregnantConsultation = () => (
  <Container>
    <Filters>
      <FilterText>Filtrar por</FilterText>
      <ButtonFilter onClick= { () => alert('clicado') } >Todos</ButtonFilter>
      <ButtonFilter>Realizados</ButtonFilter>
      <ButtonFilter>Não Realizados</ButtonFilter>
      <ButtonFilter>Outros</ButtonFilter>
      <ButtonFilter>Na Agenda</ButtonFilter>
    </Filters>
    <Consultation/>
    <Consultation/>
    <ButtonIncludeConsultation>Incluir outra consulta de Enfermagem?</ButtonIncludeConsultation>
    <Consultation/>
  </Container>
)

export default PregnantConsultation
