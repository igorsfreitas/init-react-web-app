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

import I18n, { useT } from '@meta-react/i18n'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

import schema, { INITIAL_VALUES } from '@idea/forms/schemas/exam/exam.schema'
import { useFormEffect } from '@idea/forms/src'
import gestationRoutes from '@idea/services/api/routes/gestation.routes'
import { ExamActions } from '@idea/stores/examPregnant'
import { selectUser } from '@idea/stores/user/user.selectors'
import fonts from '@idea/styles/fonts'
import useApi from '@idea/swr/useApi'

import CancelButton from '~/components/Button/CancelButton'
import EditButton from '~/components/Button/EditButton'
import SaveButton from '~/components/Button/SaveButton'
import Form from '~/components/Form'
import HeaderHello from '~/components/HeaderHello'
import InputDate from '~/components/InputDate'
import InputHour from '~/components/InputHour'
import InputSelectWithHouseIcon from '~/components/InputSelectWithHouseIcon/InputSelectWithHouseIcon'
import ModalBackdrop from '~/components/ModalBackdrop'
import RadioGroup from '~/components/RadioGroup'

import {
  Cell,
  ButtonsContainer
} from './styles'

const ModalExam = (props) => {
  const {
    accessUser,
    handleClose,
    onSuccess,
    gestationId,
    exameId,
    values,
    edit,
    onEditClick,
    ...rest
  } = props
  const t = useT()

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const formRef = useRef(null)

  const [internalUser] = useState(accessUser.nuMatricula !== undefined ? !!accessUser.nuMatricula : true)
  const [hasUrgencyGestation, setHasUrgencyGestation] = useState(INITIAL_VALUES.stPerguntaUnidadeUrgencia)
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
  const wentToSusOptions = useMemo(
    () => [
      { id: true, name: 'Sim' },
      { id: false, name: 'Não' }
    ],
    []
  )

  const handleSubmit = useCallback(
    (values) => {
      if (!edit) {
        dispatch(ExamActions.create(
          {
            ...values,
            idGestacao: gestationId || '',
            idExame: exameId || null,
            stSUS: values.stSUS || false,
            stPerguntaGestacaoRisco: values.stPerguntaGestacaoRisco || false,
            stGestacaoExame: true
          },
          () => {
            onSuccess()
            handleClose()
          }
        ))
      } else {
        dispatch(ExamActions.update(
          {
            ...values,
            idGestacao: gestationId || '',
            idExame: exameId || null,
            stSUS: values.stSUS || false,
            stPerguntaGestacaoRisco: values.stPerguntaGestacaoRisco || false
          },
          () => {
            onSuccess()
            handleClose()
          }
        ))
      }
    },
    [dispatch, edit, exameId, gestationId, handleClose, onSuccess]
  )
  const defaultValues = useMemo(
    () => ({
      ...INITIAL_VALUES,
      ...values,
      dtGestacaoExame: values?.dsDataExame || INITIAL_VALUES.dtGestacaoExame,
      hrGestacaoExame: values?.dsHoraExame || INITIAL_VALUES.hrGestacaoExame
    }),
    [values]
  )

  const schemaConstructor = useCallback(
    (opts = {}) => schema({ internalUser, ...opts }),
    [internalUser]
  )

  useFormEffect(
    () => {
      formRef.current.reloadSchema()
    },
    [schemaConstructor]
  )

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
              subtitle="Que bom que realizou o exame, confirme os dados por favor"
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
                  schemaConstructor={ schemaConstructor }
                  defaultValues={ defaultValues }
                >
                  <Grid container>
                    <Grid item>
                      <Grid container justify="center">
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputDate
                            name="dtGestacaoExame"
                            label="Informe a data que realizou o exame:"
                            placeholder="DD/MM/AAAA"
                            readOnly={ readOnly }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputHour
                            name="hrGestacaoExame"
                            label="Qual horário realizou o exame?"
                            placeholder="Qual horário realizou o exame?"
                            readOnly={ readOnly }
                            inputProps={ { maxLength: 100 } }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10, marginBottom: 20 } }>
                          <RadioGroup
                            name="stSUS"
                            label="Você realizou o exame no SUS?"
                            options={ wentToSusOptions }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10, marginBottom: 20 } }>
                          <RadioGroup
                            name="stPerguntaGestacaoRisco"
                            label={ t('riskPregnancy') }
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

ModalExam.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  accessUser: PropTypes.object,
  onSuccess: PropTypes.func,
  onEditClick: PropTypes.func,
  gestationId: PropTypes.number,
  exameId: PropTypes.number,
  values: PropTypes.any,
  edit: PropTypes.bool
}

ModalExam.defaultProps = {
  accessUser: {},
  onSuccess () { },
  onEditClick: undefined,
  gestationId: 0,
  exameId: 0,
  values: undefined,
  edit: false
}

export default ModalExam
