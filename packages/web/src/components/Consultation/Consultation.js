import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import PropTypes from 'prop-types'

// import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import RadioGroup from '@material-ui/core/RadioGroup'

import { ConsultationActions } from '@idea/stores/consultationPregnant'
import { ExamActions } from '@idea/stores/examPregnant'
import { useModal } from '@idea/use-modal'

import EditPencil from '../icons/EditPencil'
import ModalConsultation from '../ModalConsultation/ModalConsultation'
import ModalExam from '../ModalExam/ModalExam'
import StyledRadio from '../StyledRadio/StyledRadio'
import './styles.css'
import {
  Container,
  TypeColor,
  Title,
  Subtitle,
  Divisor,
  Description,
  Wrapper,
  Full,
  Half,
  Left
} from './styles'

const Consultation = (props) => {
  const {
    wentConsultation,
    wentExam,
    consultationId,
    gestationId,
    exameId,
    object,
    riskGestaton,
    consultationsRefresh,
    examsRefresh
  } = props
  const { createModal } = useModal()
  const dispatch = useDispatch()

  const handleOpenConsultationModal = useCallback(
    () => {
      if (wentConsultation) {
        createModal({
          id: 'register-consultation-modal',
          Component: ModalConsultation,
          props: {
            onSuccess: consultationsRefresh,
            gestationId,
            consultationId
          }
        })
      }
    },
    [consultationId, consultationsRefresh, createModal, gestationId, wentConsultation]
  )
  const handleOpenToEditConsultationModal = useCallback(
    () => {
      if (wentConsultation) {
        createModal({
          id: 'edit-consultation-modal',
          Component: ModalConsultation,
          props: {
            onSuccess: consultationsRefresh,
            values: object,
            edit: true,
            gestationId,
            consultationId
          }
        })
      }
    },
    [consultationId, consultationsRefresh, createModal, gestationId, object, wentConsultation]
  )
  const handleOpenExamModal = useCallback(
    () => {
      if (wentExam) {
        createModal({
          id: 'register-exam-modal',
          Component: ModalExam,
          props: {
            onSuccess: examsRefresh,
            gestationId,
            exameId
          }
        })
      }
    },
    [createModal, exameId, examsRefresh, gestationId, wentExam]
  )
  const handleOpenToEditExamModal = useCallback(
    () => {
      if (wentExam) {
        createModal({
          id: 'edit-exam-modal',
          Component: ModalExam,
          props: {
            onSuccess: examsRefresh,
            values: object,
            edit: true,
            // onEditClick () {},
            gestationId,
            exameId
          }
        })
      }
    },
    [createModal, exameId, examsRefresh, gestationId, object, wentExam]
  )
  return (
    <Wrapper>
      <TypeColor
        cardColor= { props.class }
      />
      <Container>
        <Left>
          {/* {
            props.class === 'SUGESTAO_CONSULTA' &&
            props.schedule === false && (
              <Button
                className="btnIncluir"
                size="small"
              >
                    Incluir na agenda
              </Button>
            )
          } */}
          {/* {
            props.class === 'SUGESTAO_EXAME' &&
            props.schedule === false && (
              <Button
                className="btnIncluir"
                size="small"
              >
                    Incluir na agenda
              </Button>
            )
          } */}
          {/* {
            props.schedule === true && (
              <Button
                className="btnIncluso"
                size="small"
              >
             Incluso na agenda
              </Button>
            )
          } */}
          {
            props.class && !!consultationId && (
              <IconButton
                onClick={
                  () => { handleOpenToEditConsultationModal() }
                }
              >
                <EditPencil/>
              </IconButton>
            )
          }
          {
            props.class && !!exameId && (
              <IconButton onClick={ () => { handleOpenToEditExamModal() } }>
                <EditPencil />
              </IconButton>
            )
          }
          {/* {
            props.schedule === true
              ? <IconButton>
                <EditPencil/>
              </IconButton>
              : null
          } */}
        </Left>
        <Half>
          <Title>
            {
              props.type
            }
          </Title>
          <Subtitle>
            {
              props.information
            }
          </Subtitle>
          <Subtitle>
            {
              riskGestaton
            }
          </Subtitle>
        </Half>
        <Divisor/>
        <Full>
          { wentConsultation && (
            props.class ? (
              <Description>Realizou a consulta?
                <RadioGroup
                  aria-label="RealizacaoConsulta"
                  className="radio"
                >
                  <FormControlLabel
                    className="radioLabel"
                    value="realizado"
                    checked={ object?.stStatusConsultaCard === true }
                    control=
                      {
                        <StyledRadio backgroundColor="#2DD09F"/>
                      }
                    label="Sim"
                  />
                  <FormControlLabel
                    className="radioLabel"
                    value="nao_realizados"
                    checked={ object?.stStatusConsultaCard === false }
                    onClick={ () => {
                      dispatch(ConsultationActions.update({
                        idConsulta: consultationId, idGestacao: gestationId, stGestacaoConsulta: false, idConsultaCard: object?.idConsultaCard
                      }, consultationsRefresh))
                    } }
                    control=
                      {
                        <StyledRadio backgroundColor="#FF647C"/>
                      }
                    label="Não"
                  />
                </RadioGroup></Description>
            ) : (<Description>Realizou a consulta?
              <RadioGroup
                defaultValue= { props.class }
                aria-label="RealizacaoConsulta"
                className="radio"
              >
                <FormControlLabel
                  className="radioLabel"
                  value="realizado"
                  onClick={ handleOpenConsultationModal }
                  checked={ object?.stStatusConsultaCard === true }
                  control=
                    {
                      <StyledRadio backgroundColor="#2DD09F"/>
                    }
                  label="Sim"
                />
                <FormControlLabel
                  className="radioLabel"
                  value="nao_realizados"
                  onClick={ () => {
                    dispatch(ConsultationActions.create({
                      idConsulta: consultationId, idGestacao: gestationId, stGestacaoConsulta: false, idConsultaCard: object?.idConsultaCard
                    }, consultationsRefresh))
                  } }
                  control=
                    {
                      <StyledRadio backgroundColor="#FF647C"/>
                    }
                  label="Não"
                  checked={ object?.stStatusConsultaCard === false }
                />
              </RadioGroup></Description>
            )
          )
          }
          {wentExam && (
            props.class ? (<Description>Realizou o exame?
              <RadioGroup
                defaultValue= { props.class }
                aria-label="RealizacaoExame"
                className="radio"
              >
                <FormControlLabel
                  className="radioLabel"
                  value="realizado"
                  checked={ object?.stStatus === true }
                  control=
                    {
                      <StyledRadio backgroundColor="#2DD09F"/>
                    }
                  label="Sim"
                />
                <FormControlLabel
                  className="radioLabel"
                  value="nao_realizados"
                  checked={ object?.stStatus === false }
                  onClick={ () => {
                    dispatch(ExamActions.update({
                      idExame: exameId, idGestacao: gestationId, stGestacaoExame: false, idExameCard: object?.idExameCard
                    }, examsRefresh))
                  } }
                  control=
                    {
                      <StyledRadio backgroundColor="#FF647C"/>
                    }
                  label="Não"
                />
              </RadioGroup></Description>
            ) : (<Description>Realizou o exame?
              <RadioGroup
                defaultValue= { props.class }
                aria-label="RealizacaoExame"
                className="radio"
              >
                <FormControlLabel
                  className="radioLabel"
                  value="realizado"
                  onClick={ handleOpenExamModal }
                  control=
                    {
                      <StyledRadio backgroundColor="#2DD09F"/>
                    }
                  label="Sim"
                  checked={ object?.stStatus === true }
                />
                <FormControlLabel
                  className="radioLabel"
                  value="nao_realizados"
                  onClick={ () => {
                    dispatch(ExamActions.create({
                      idExame: exameId, idGestacao: gestationId, stGestacaoExame: false, idExameCard: object?.idExameCard
                    }, examsRefresh))
                  } }
                  control=
                    {
                      <StyledRadio backgroundColor="#FF647C"/>
                    }
                  label="Não"
                  checked={ object?.stStatus === false }
                />
              </RadioGroup>
            </Description>
            )
          )
          }
        </Full>
      </Container>
    </Wrapper>
  )
}

Consultation.propTypes = {
  type: PropTypes.string,
  information: PropTypes.string,
  riskGestaton: PropTypes.string,
  class: PropTypes.bool,
  wentConsultation: PropTypes.bool,
  wentExam: PropTypes.bool,
  gestationId: PropTypes.number,
  consultationId: PropTypes.number,
  exameId: PropTypes.number,
  consultationsRefresh: PropTypes.func.isRequired,
  examsRefresh: PropTypes.func.isRequired,
  object: PropTypes.any
}

Consultation.defaultProps = {
  type: 'Enfermagem',
  information: 'Sem informação',
  riskGestaton: '',
  class: false,
  object: '',
  wentConsultation: false,
  wentExam: false,
  gestationId: 0,
  exameId: 0,
  consultationId: 0
}

export default Consultation
