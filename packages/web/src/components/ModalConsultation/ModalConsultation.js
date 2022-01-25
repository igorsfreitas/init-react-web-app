import {
  useRef,
  useCallback,
  useMemo,
  useState
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'

import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import InputAdornment from '@material-ui/core/InputAdornment'

import schema, { INITIAL_VALUES } from '@idea/forms/schemas/consultation/consultation.schema'
import {
  houseWithClockIcon,
  heartIcon
} from '@idea/icons'
import gestationRoutes from '@idea/services/api/routes/gestation.routes'
import { ConsultationActions } from '@idea/stores/consultationPregnant'
import { selectUser } from '@idea/stores/user/user.selectors'
import fonts from '@idea/styles/fonts'
import useApi from '@idea/swr/useApi'

import CancelButton from '~/components/Button/CancelButton'
import EditButton from '~/components/Button/EditButton'
import SaveButton from '~/components/Button/SaveButton'
import Form from '~/components/Form'
import HeaderHello from '~/components/HeaderHello'
import Icon from '~/components/Icon'
import InputDate from '~/components/InputDate'
import InputHour from '~/components/InputHour'
import InputSelect from '~/components/InputSelect/InputSelect'
import InputSelectWithHouseIcon from '~/components/InputSelectWithHouseIcon/InputSelectWithHouseIcon'
import ModalBackdrop from '~/components/ModalBackdrop'
import RadioGroup from '~/components/RadioGroup'

import {
  Cell,
  ButtonsContainer
} from './styles'

const ModalGestation = (props) => {
  const {
    accessUser,
    handleClose,
    onSuccess,
    onEditClick,
    gestationId,
    edit,
    consultationId,
    values,
    ...rest
  } = props

  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  const formRef = useRef(null)
  const [hasUrgencyGestation, setHasUrgencyGestation] = useState(INITIAL_VALUES.stPerguntaUnidadeUrgencia)
  const { data: whereConsultationCarriedOut, loading: whereConsultationCarriedOutLoading } = useApi(gestationRoutes.getUnidadesPreNatal)
  const { data: whichProfessional, loading: whichProfessionalLoading } = useApi(gestationRoutes.getAllProfessionals)
  const { data: unidadesAcompanhamentoUrgencia, loading: unidadesAcompanhamentoUrgenciaLoading } = useApi(gestationRoutes.getUnidadesUrgencia.replace(':idPregnant', user.idGestante))

  const readOnly = useMemo(
    () => !!onEditClick,
    [onEditClick]
  )
  const riskPregnancyOptions = useMemo(
    () => [
      { id: true, name: 'Sim' },
      { id: false, name: 'Não' }
    ],
    []
  )
  const handleSubmit = useCallback(

    (values) => {
      if (!edit) {
        dispatch(ConsultationActions.create(
          {
            ...values,
            idGestacao: gestationId || '',
            idConsulta: consultationId || null,
            stPerguntaGestacaoRisco: values.stPerguntaGestacaoRisco || false,
            stGestacaoConsulta: true
          },
          () => {
            onSuccess()
            handleClose()
          }
        ))
      } else {
        dispatch(ConsultationActions.update(
          {
            ...values,
            idGestacao: gestationId || '',
            idConsulta: consultationId || null,
            stPerguntaGestacaoRisco: values.stPerguntaGestacaoRisco || false
          },
          () => {
            onSuccess()
            handleClose()
          }
        ))
      }
    },
    [edit, dispatch, gestationId, consultationId, onSuccess, handleClose]
  )
  const defaultValues = useMemo(
    () => ({
      ...INITIAL_VALUES,
      ...values,
      dtGestacaoConsulta: values?.dsDataConsulta || INITIAL_VALUES.dtGestacaoConsulta,
      hrGestacaoConsulta: values?.dsHoraConsulta || INITIAL_VALUES.hrGestacaoConsulta
    }),
    [values]
  )

  const addFirstOption = useCallback((options, fieldName, optionValue) => {
    if (!options || !options?.length) return [{ [fieldName]: optionValue }]
    return [{ [fieldName]: optionValue }, ...options]
  }, [])

  return (
    <ModalBackdrop
      { ...rest }
      handleClose={ handleClose }
      maxWidth="xs"
    >
      <Grid container justify="center" style={ { flex: 1, height: '90%' } }>
        <Grid item lg={ 4 } style={ { flex: 1 } }>
          <Cell style={ { alignItems: 'center' } } >
            <HeaderHello
              title={ user.nmGestante }
              subtitle="Que bom que realizou a consulta, confirme os dados por favor"
              titleStyle={ {
                fontWeight: fonts.fontWeight.bold,
                letterSpacing: 1
              } }
              subtitleStyle={ {
                lineHeight: 1.3,
                maxWidth: 327
              } }
            />
          </Cell>
          <Cell onClick={ (e) => e.stopPropagation() } >
            <Card>
              <CardContent>
                <Form
                  ref={ formRef }
                  onSubmit={ handleSubmit }
                  schemaConstructor={ schema }
                  defaultValues={ defaultValues }
                >
                  <Grid container>
                    <Grid item>
                      <Grid container justify="center">
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputDate
                            InputLabelProps={ { shrink: true, required: false } }
                            name="dtGestacaoConsulta"
                            label="Informe a data que realizou a consulta: Obrigatório"
                            placeholder="DD/MM/AAAA"
                            readOnly={ readOnly }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputHour
                            name="hrGestacaoConsulta"
                            label="Qual horário realizou a consulta?"
                            placeholder="Qual horário realizou a consulta?"
                            readOnly={ readOnly }
                            inputProps={ { maxLength: 100 } }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputSelect
                            InputLabelProps={ { shrink: true, required: false } }
                            name="idTpLocalAcompanhamentoPreNatal"
                            label="Onde a consulta foi realizada? Obrigatório"
                            placeholder="Onde a consulta foi realizada?"
                            valueKey="dsTpLocalAcompanhamentoPreNatal"
                            idKey="idTpLocalAcompanhamentoPreNatal"
                            readOnly={ readOnly }
                            options={ addFirstOption(whereConsultationCarriedOut, 'dsTpLocalAcompanhamentoPreNatal', 'Selecione') }
                            loading={ whereConsultationCarriedOutLoading }
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon icon={ houseWithClockIcon } size={ 24 } />
                                </InputAdornment>
                              )
                            } }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10, marginBottom: 20 } }>
                          <InputSelect
                            name="idTpProfissional"
                            label="Qual profissional realizou a consulta? Obrigatório"
                            InputLabelProps={ { shrink: true, required: false } }
                            placeholder="Qual profissional realizou a consulta?"
                            InputProps={ {
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon icon={ heartIcon } size={ 24 } />
                                </InputAdornment>
                              )
                            } }
                            idKey="idTpProfissional"
                            valueKey="dsTpProfissional"
                            options={ whichProfessional }
                            loading={ whichProfessionalLoading }
                            readOnly={ readOnly }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10, marginBottom: 20 } }>
                          <RadioGroup
                            readOnly={ readOnly }
                            name="stPerguntaGestacaoRisco"
                            label="Sua gestação é de Alto Risco?"
                            options={ riskPregnancyOptions }
                            onValueChange={ setHasUrgencyGestation }
                          />
                        </Grid>
                        {!!hasUrgencyGestation && (
                          <Grid xs= { 10 } style={ { margin: 10, marginBottom: 20 } }>
                            <InputSelectWithHouseIcon
                              name="idUnidadeAcompanhamentoUrgencia"
                              label= { 'Informe em qual unidade está realizando o pré-natal de alto risco:' }
                              placeholder= { 'Nome da Unidade' }
                              valueKey="nmUnidadeSaude"
                              idKey="idUnidadeSaude"
                              options={ unidadesAcompanhamentoUrgencia }
                              loading={ unidadesAcompanhamentoUrgenciaLoading }
                            />
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                  <ButtonsContainer>
                    {
                      readOnly ? (
                        <I18n
                          as={ EditButton }
                          onClick={ () => {
                            handleClose(false)
                            onEditClick()
                          } }
                        >
                            edit
                        </I18n>
                      ) : (
                        <>
                          <I18n
                            as={ CancelButton }
                            onClick={ () => handleClose(false) }
                          >
                              cancel
                          </I18n>
                          <I18n
                            as={ SaveButton }
                            style={ { marginLeft: 10 } }
                            onClick={ () => formRef.current.submit() }
                          >
                              save
                          </I18n>
                        </>
                      )
                    }
                  </ButtonsContainer>
                </Form>
              </CardContent>
            </Card>
          </Cell>
        </Grid>
      </Grid>
    </ModalBackdrop>
  )
}

ModalGestation.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  accessUser: PropTypes.object,
  onSuccess: PropTypes.func,
  onEditClick: PropTypes.func,
  gestationId: PropTypes.number,
  consultationId: PropTypes.number,
  values: PropTypes.any,
  edit: PropTypes.bool
}

ModalGestation.defaultProps = {
  accessUser: {},
  onSuccess () { },
  onEditClick: undefined,
  gestationId: 0,
  consultationId: 0,
  values: undefined,
  edit: false
}

export default ModalGestation
