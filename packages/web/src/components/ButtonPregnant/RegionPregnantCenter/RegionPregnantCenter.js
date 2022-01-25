import React, { useState } from 'react'

import I18n from '@meta-react/i18n'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'

import ButtonFilter from '~/components/ButtonFilter'
import CardResume from '~/components/CardResume'
import ComponentConsultation from '~/components/Consultation'
import ModalConsultation from '~/components/ModalConsultation'

import ButtonGestation from '../ButtonGestation'
import {
  Container,
  FilterText,
  Filters
} from './styles'
import './styles.css'
const RegionPregnantCenter = ({ title }) => {
  const Consultations = [
    { type: 'Médica' },
    {
      class: 'na-agenda', type: 'Enfermagem', information: 'Exame incluso na agenda para: 28/01/2021 às 14:00h'
    },
    {
      class: 'realizado', type: 'Enfermagem', information: 'Realizado 08/01/2021 às 14:00h - Na nome da unidade - gestação de risco habitual'
    },
    { class: 'nao_realizado', type: 'Odontológica' }
  ]
  const Resumo = [
    { type: 'Consulta Médica' },
    {
      class: 'realizado', type: 'Triagem Sifilis', information: 'Exame incluso na agenda para: 28/01/2021 às 14:00h'
    },
    {
      class: 'realizado', type: 'Consulta Enfermagem', information: 'Realizado 08/01/2021 às 14:00h - Na nome da unidade - gestação de risco habitual'
    },
    { class: 'nao_realizados', type: 'Consulta Enfermagem' },
    { type: 'Consulta Médica' },
    {
      class: 'realizado', type: 'Consulta Enfermagem', information: 'Exame incluso na agenda para: 28/01/2021 às 14:00h'
    },
    {
      class: 'realizado', type: 'Anti-HIV', information: 'Realizado 08/01/2021 às 14:00h - Na nome da unidade - gestação de risco habitual'
    },
    { class: 'nao_realizados', type: 'Odontológica' }
  ]
  const [modal, setModal] = useState(false)
  const openModal = (open) => { setModal(open) }
  return (
    <Container>
      { title === 'init' ? <I18n
        as={ ButtonGestation }
                           >
        registerGestation
      </I18n> : null
      }
      {
        title === 'resume' ? <div>
          <Filters>
            <FilterText>Filtrar por</FilterText>
            <ButtonFilter value="todos">Todos</ButtonFilter>
            <ButtonFilter value="realizados">Realizadas</ButtonFilter>
            <ButtonFilter value="nao_realizados">Não Realizadas</ButtonFilter>
          </Filters>
          { Resumo.map((Resumo) =>
            (
              <div key= { Resumo }>
                <CardResume class= { Resumo.class } type = { Resumo.type } information = { Resumo.information }/>
              </div>
            )
          ) }
        </div> : null
      }
      {
        title === 'consultation' ? <div>
          <Filters>
            <FilterText>Filtrar por</FilterText>
            <ButtonFilter value="todos">Todos</ButtonFilter>
            <ButtonFilter value="realizados">Realizadas</ButtonFilter>
            <ButtonFilter value="nao_realizados">Não Realizadas</ButtonFilter>
            <ButtonFilter value="outros">Outros</ButtonFilter>
          </Filters>
          { Consultations.map((Consultation) =>
            (
              <div key= { Consultation }>
                <ComponentConsultation
                  riskGestaton= { Consultation?.dsRisco }
                  class= { Consultation?.class }
                  type = { Consultation?.type }
                  information = { Consultation?.information }
                />
                {
                  Consultation?.class === 'realizado' &&
                  Consultation?.quantidadeMinimaAtingida === true
                    ? <Button
                      style={ { marginTop: '5px' } }
                      disableElevation
                      variant="outlined"
                      className="btnIncludeConsultation"
                      onClick= {
                        () => openModal(true)
                      }
                    >
                    Incluir outra consulta de { Consultation?.type }
                    </Button>
                    : null
                }
              </div>
            )
          ) }
          <ModalConsultation handleClose= { openModal } open= { modal } id="1"/>
        </div> : null
      }
    </Container>
  )
}

RegionPregnantCenter.propTypes = { title: PropTypes.string }

RegionPregnantCenter.defaultProps = { title: 'init' }

export default RegionPregnantCenter
