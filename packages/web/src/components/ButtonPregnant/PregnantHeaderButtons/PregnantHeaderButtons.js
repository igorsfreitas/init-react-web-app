import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import ButtonNavigation from '~/components/ButtonNavigation'
import CounterTrimester from '~/components/CounterTrimester'
import ButtonAgenda from '~/components/icons/ButtonAgenda'
import ButtonConsultas from '~/components/icons/ButtonConsultas'
import ButtonExames from '~/components/icons/ButtonExames'
import ButtonResumo from '~/components/icons/ButtonResumo'
import IconAgenda from '~/components/icons/IconAgenda'
import IconConsulta from '~/components/icons/IconConsulta'
import IconExames from '~/components/icons/IconExames'
import IconResumo from '~/components/icons/IconResumo'

import {
  Header,
  HeaderButtons,
  Buttons,
  ButtonIcon,
  Text
} from './styles'

const button = <HeaderButtons>
  <ButtonConsultas/>
  <ButtonResumo/>
  <ButtonAgenda/>
  <ButtonExames/>
</HeaderButtons>
const buttonGrey = <HeaderButtons>
  <I18n
    as={ ButtonNavigation }
    onClick={ () => {
      console.log('teste')
    } }
  >
    <IconConsulta/>
    <ButtonIcon/>
          Consultas
  </I18n>
  <I18n
    as={ ButtonNavigation }
    onClick={ () => {
      console.log('teste')
    } }
  >
    <IconExames/>
    <ButtonIcon/>
          Exames
  </I18n>
  <I18n
    as={ ButtonNavigation }
    onClick={ () => {
      console.log('teste')
    } }
  >
    <IconAgenda/>
    <ButtonIcon/>
          Agenda
  </I18n>
  <I18n
    as={ ButtonNavigation }
    onClick={ () => {
      console.log('teste')
    } }
  >
    <IconResumo/>
    <ButtonIcon/>
          Resumo
  </I18n>
</HeaderButtons>
const PregnantHeaderButtons = ({
  title, exames, examesNR, consultas, consultasNR
}) => (
  <div>
    <Header>
      <Buttons>
        { title === 'init' ? <div>{button}</div> : <div>{buttonGrey}</div> }
      </Buttons>
      { title === 'exams' ? <CounterTrimester exames = { exames }/> : null }
      { title === 'consultation' ? <CounterTrimester exames = { exames }/> : null }
      { title === 'resume' ? <Text>Até o momento durante sua gestação você teve { exames } exames e { consultas } consultas realizados { examesNR } exames e { consultasNR } consultas não realizados</Text> : null }
    </Header>
  </div>
)

PregnantHeaderButtons.propTypes = {
  title: PropTypes.string,
  exames: PropTypes.number,
  examesNR: PropTypes.number,
  consultas: PropTypes.number,
  consultasNR: PropTypes.number
}

PregnantHeaderButtons.defaultProps = {
  title: 'init',
  exames: 0,
  examesNR: 0,
  consultas: 0,
  consultasNR: 0
}

export default PregnantHeaderButtons
