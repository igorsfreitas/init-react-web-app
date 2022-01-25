import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import PropTypes from 'prop-types'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'

import { GestationActions } from '@idea/stores/gestation'

import StyledRadio from '../StyledRadio/StyledRadio'
import {
  Container,
  Description,
  Divisor,
  Full,
  Half,
  Left,
  Subtitle,
  Title,
  TypeColor,
  Wrapper
} from './styles'

import './styles.css'

const CardNotification = (props) => {
  const dispatch = useDispatch()

  const handleRadioChange = useCallback((wasVaccinated) => {
    if (props.vaccinated === null) {
      dispatch(GestationActions.createVaccine({ ...props.vaccineData, stTomouVacina: wasVaccinated }))
    } else {
      dispatch(GestationActions.updateVaccine({ ...props.vaccineData, stTomouVacina: wasVaccinated }))
    }
    props.refresh()
  }, [props, dispatch])

  return (
    <Wrapper unread={ !props.status }>
      <TypeColor
        type= { props.type }
      />
      <Container>
        <Left/>

        <Half>
          <Title>
            {
              props.title
            }
          </Title>
          <Subtitle>
            {
              props.description
            }
          </Subtitle>
        </Half>
        { props.type === 'vacina' && <Divisor/>}
        <Full>
          { props.type === 'vacina' && (
            <Description><diiv className="question">Você tomou a vacina?</diiv>
              <RadioGroup
                aria-label="RealizacaoConsulta"
                className="radio"
              >
                <FormControlLabel
                  className="radioLabel"
                  value="realizado"
                  checked={ props.vaccinated }
                  control=
                    {
                      <StyledRadio backgroundColor="#2DD09F"/>
                    }
                  label="Sim"
                  onClick={ () => handleRadioChange(true) }
                />
                <FormControlLabel
                  className="radioLabel"
                  value="nao_realizados"
                  checked={ props.vaccinated !== null && !props.vaccinated }
                  onClick={ () => handleRadioChange(false) }
                  control=
                    {
                      <StyledRadio backgroundColor="#FF647C"/>
                    }
                  label="Não"
                />
              </RadioGroup>
            </Description>
          )
          }
        </Full>
      </Container>
    </Wrapper>
  )
}

CardNotification.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  vaccinated: PropTypes.bool,
  refresh: PropTypes.func,
  vaccineData: PropTypes.object.isRequired
}

CardNotification.defaultProps = { vaccinated: null, refresh () {} }

export default CardNotification
