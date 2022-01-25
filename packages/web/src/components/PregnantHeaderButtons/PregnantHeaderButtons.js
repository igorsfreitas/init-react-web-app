import {
  useState,
  useEffect
} from 'react'

import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import ButtonAgenda from '~/components/icons/ButtonAgenda'
import ButtonConsultas from '~/components/icons/ButtonConsultas'
import ButtonExames from '~/components/icons/ButtonExames'
import ButtonResumo from '~/components/icons/ButtonResumo'
// import IconAgenda from '~/components/icons/IconAgenda'
import IconConsulta from '~/components/icons/IconConsulta'
import IconExames from '~/components/icons/IconExames'
import IconResumo from '~/components/icons/IconResumo'

import ButtonNavigation from '../ButtonNavigation/ButtonNavigation'
import CounterTrimester from '../CounterTrimester/CounterTrimester'
import {
  Header,
  HeaderButtons,
  Buttons,
  ButtonIcon,
  Text,
  Wrapper
} from './styles'

const PregnantHeaderButtons = (props) => {
  const {
    trimesterCallbackToHome,
    buttonNavigationCallback,
    counterWentExams,
    counterWentConsultations
  } = props

  const [buttonNavigationName, setButtonNavigationName] = useState('consultation')

  useEffect(() => {
    if (buttonNavigationName) {
      buttonNavigationCallback(buttonNavigationName)
    }
  }, [buttonNavigationCallback, buttonNavigationName])

  return (
    <Grid item>
      <Header>
        <Buttons>
          {
            props.title === 'init'
              ? <Grid>
                <HeaderButtons>
                  <ButtonConsultas/>
                  <ButtonResumo/>
                  <ButtonAgenda/>
                  <ButtonExames/>
                </HeaderButtons>
              </Grid>
              : <Grid>
                <HeaderButtons>
                  <I18n
                    as={ ButtonNavigation }
                    onClick={ () => {
                      setButtonNavigationName('consultation')
                    } }
                    style={ buttonNavigationName === 'consultation' ? {
                      color: '#FFF',
                      fontSize: '12px',
                      backgroundColor: '#7A3387',
                      marginRight: '10px',
                      lineHeight: '16,8px'
                    } : {
                      color: '#A877B1',
                      fontSize: '12px',
                      backgroundColor: '#FFF',
                      marginRight: '10px',
                      lineHeight: '16,8px'
                    } }
                  >
                    <IconConsulta/>
                    <ButtonIcon/>
                      Consultas
                  </I18n>
                  <I18n
                    as={ ButtonNavigation }
                    onClick={ () => {
                      setButtonNavigationName('exams')
                    } }
                    style={ buttonNavigationName === 'exams' ? {
                      color: '#FFF',
                      fontSize: '12px',
                      backgroundColor: '#7A3387',
                      marginRight: '10px',
                      lineHeight: '16,8px'
                    } : {
                      color: '#A877B1',
                      fontSize: '12px',
                      backgroundColor: '#FFF',
                      marginRight: '10px',
                      lineHeight: '16,8px'
                    } }
                  >
                    <IconExames/>
                    <ButtonIcon/>
                    Exames
                  </I18n>
                  {/* <I18n
                as={ ButtonNavigation }
                onClick={ () => {
                  setButtonNavigationName('schedule')
                } }
                style={ buttonNavigationName === 'schedule' ? {
                  color: '#FFF',
                  backgroundColor: '#7A3387',
                  marginRight: '10px'
                } : {
                  color: '#A877B1',
                  backgroundColor: '#FFF',
                  marginRight: '10px'
                } }
              >
                <IconAgenda/>
                <ButtonIcon/>
            Agenda
              </I18n> */}
                  <I18n
                    as={ ButtonNavigation }
                    onClick={ () => {
                      setButtonNavigationName('resume')
                    } }
                    style={ buttonNavigationName === 'resume' ? {
                      color: '#FFF',
                      fontSize: '12px',
                      backgroundColor: '#7A3387',
                      marginRight: '10px',
                      lineHeight: '16,8px'
                    } : {
                      color: '#A877B1',
                      fontSize: '12px',
                      backgroundColor: '#FFF',
                      marginRight: '10px',
                      lineHeight: '16,8px'
                    } }
                  >
                    <IconResumo/>
                    <ButtonIcon/>
                    Resumo
                  </I18n>
                </HeaderButtons>
              </Grid>
          }
        </Buttons>
        {
          buttonNavigationName === 'consultation'
            ? <CounterTrimester
              consultation
              exames = { counterWentConsultations }
              trimesterCallback={
                (trimesterNumber) => {
                  trimesterCallbackToHome(trimesterNumber)
                }
              }
              />
            : null
        }
        {
          buttonNavigationName === 'exams'
            ? <CounterTrimester
              exam
              exames = { counterWentExams }
              trimesterCallback={
                (trimesterNumber) => {
                  trimesterCallbackToHome(trimesterNumber)
                }
              }
              />
            : null
        }
        {
          <>
            <Wrapper>
              {
                buttonNavigationName === 'resume'
                  ? <Text>Até o momento durante sua gestação você teve { props.exames } {props.exames === 0 || props.exames === 1 ? 'exame' : 'exames'} e { props.consultas } {props.consultas === 0 || props.consultas === 1 ? 'consulta' : 'consultas'} realizados { props.examesNR }  {props.examesNR === 0 || props.examesNR === 1 ? 'exame' : 'exames'} e { props.consultasNR } consultas {props.consultasNR === 0 || props.consultasNR === 1 ? 'não realizado' : 'não realizados'}</Text>
                  : null

              }
            </Wrapper>
          </>
        }
      </Header>
    </Grid>
  )
}

PregnantHeaderButtons.propTypes = {
  title: PropTypes.string,
  exames: PropTypes.number,
  examesNR: PropTypes.number,
  consultas: PropTypes.number,
  consultasNR: PropTypes.number,
  trimesterCallbackToHome: PropTypes.func,
  buttonNavigationCallback: PropTypes.func,
  counterWentConsultations: PropTypes.number,
  counterWentExams: PropTypes.number
}

PregnantHeaderButtons.defaultProps = {
  title: 'init',
  exames: 0,
  examesNR: 0,
  consultas: 0,
  consultasNR: 0,
  trimesterCallbackToHome () {},
  buttonNavigationCallback () {},
  counterWentConsultations: 0,
  counterWentExams: 0
}

export default PregnantHeaderButtons
