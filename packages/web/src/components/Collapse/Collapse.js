import React, { useState } from 'react'

import PropTypes from 'prop-types'

import {
  minusIcon,
  plusIcon
} from '@idea/icons'

import Icon from '~/components/Icon'

import {
  Container,
  TitleContainer,
  Title,
  ContentContainer
} from './styles'

const Collapse = (props) => {
  const {
    title,
    children
  } = props

  const [open, setOpen] = useState(true)

  return (
    <Container>
      <TitleContainer onClick={ () => setOpen((old) => !old) }>
        <>
          <Title>
            {title}
          </Title>
          <Icon icon={ open ? minusIcon : plusIcon } size={ 14 } />
        </>
      </TitleContainer>
      <ContentContainer open={ open }>
        {children}
      </ContentContainer>
    </Container>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

Collapse.defaultProps = { children: null }

export default Collapse
