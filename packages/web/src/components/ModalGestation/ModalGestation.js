import {
  useRef,
  useCallback,
  useMemo,
  useState
} from 'react'
import { useDispatch } from 'react-redux'

import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import toNumberLodash from 'lodash/toNumber'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import RadioGroup from '@material-ui/core/RadioGroup'

import schema, { INITIAL_VALUES } from '@idea/forms/schemas/accessUser/accessUser.schema'
import { useFormEffect } from '@idea/forms/src'
import gestationRoutes from '@idea/services/api/routes/gestation.routes'
import { AccessUserActions } from '@idea/stores/accessUser'
import fonts from '@idea/styles/fonts'
import useApi from '@idea/swr/useApi'
import { trimMask } from '@idea/utils/formatters'

import CancelButton from '~/components/Button/CancelButton'
import EditButton from '~/components/Button/EditButton'
import SaveButton from '~/components/Button/SaveButton'
import Form from '~/components/Form'
import HeaderHello from '~/components/HeaderHello'
import InputDate from '~/components/InputDate'
import InputSelect from '~/components/InputSelect/InputSelect'
import InputText from '~/components/InputText'
import ModalBackdrop from '~/components/ModalBackdrop'
import StyledRadio from '~/components/StyledRadio/StyledRadio'

import {
  Cell,
  ButtonsContainer,
  Description
} from './styles'

const ModalConsultation = (props) => {
  const {
    accessUser,
    handleClose,
    onSuccess,
    onEditClick,
    ...rest
  } = props
  const { data: whereConsultationCarriedOut, loading: whereConsultationCarriedOutLoading } = useApi(gestationRoutes.getUnidadesPreNatal)

  const dispatch = useDispatch()

  const formRef = useRef(null)

  const [internalUser] = useState(accessUser.nuMatricula !== undefined ? !!accessUser.nuMatricula : true)

  const readOnly = useMemo(
    () => !!onEditClick,
    [onEditClick]
  )

  const handleSubmit = useCallback(
    (values) => {
      dispatch(AccessUserActions.save(
        {
          ...values,
          nuMatricula: toNumberLodash(values.nuMatricula),
          nuCPF: values.nuCPF ? trimMask(values.nuCPF) : undefined,
          nuCelular: values.nuCelular ? trimMask(values.nuCelular) : undefined,
          stStatus: !!values.stStatus
        },
        () => {
          onSuccess()
          handleClose()
        }
      ))
    },
    [dispatch, handleClose, onSuccess]
  )

  const defaultValues = useMemo(
    () => ({
      ...INITIAL_VALUES,
      ...(accessUser || {}),
      stStatus: accessUser.stStatus !== undefined
        ? accessUser.stStatus
        : INITIAL_VALUES.stStatus
    }),
    [accessUser]
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

  useFormEffect(
    () => {
      formRef.current.setFieldValue('nmNome', defaultValues.nmNome)
    }
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
              title="Juliana,"
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
                  schemaConstructor={ schemaConstructor }
                  defaultValues={ defaultValues }
                >

                  <Grid container>

                    <Grid item>
                      <Grid container justify="center">
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputDate
                            name="nuMatricula"
                            label="Informe a data que realizou a consulta"
                            placeholder="DD/MM/AAAA"
                            readOnly={ readOnly }
                          />
                        </Grid>

                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputText
                            name="nmNome"
                            label="Qual horário realizou a consulta?"
                            placeholder="Qual horário realizou a consulta?"
                            readOnly={ readOnly }
                            inputProps={ { maxLength: 100 } }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10 } }>
                          <InputSelect
                            name="nmNome"
                            label="Onde a consulta foi realizada?"
                            placeholder="Onde a consulta foi realizada?"
                            valueKey="localAtendimento"
                            idKey="localAtendimento"
                            readOnly={ readOnly }
                            options={ whereConsultationCarriedOut }
                            loading={ whereConsultationCarriedOutLoading }
                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10, marginBottom: 20 } }>
                          <InputSelect
                            name="nmNome"
                            label="Qual profissional realizou a consulta"
                            placeholder="Qual profissional realizou a consulta"
                            valueKey="tipo"
                            idKey="tipo"
                            readOnly={ readOnly }

                          />
                        </Grid>
                        <Grid xs={ 10 } style={ { margin: 10, marginBottom: 20 } }>
                          <Description>Sua gestação é de Alto Risco?</Description>
                          <RadioGroup defaultValue= "c" aria-label="RealizacaoConsulta" className="radio">
                            <FormControlLabel className="radioLabel" value="a" control={ <StyledRadio backgroundColor="#7D6382"/> } label="Sim" />
                            <FormControlLabel className="radioLabel" value="b" control= { <StyledRadio backgroundColor="#7D6382"/> } label="Não" />
                          </RadioGroup>
                        </Grid>
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

ModalConsultation.propTypes = {
  id: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  accessUser: PropTypes.object,
  onSuccess: PropTypes.func,
  onEditClick: PropTypes.func
}

ModalConsultation.defaultProps = {
  accessUser: {},
  onSuccess () { },
  onEditClick: undefined
}

export default ModalConsultation
