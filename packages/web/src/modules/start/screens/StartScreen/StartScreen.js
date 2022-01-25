
import { useRef } from 'react'

import schema, { INITIAL_VALUES } from '@idea/forms/schemas/start/start.schema'

import Form from '~/components/Form/Form'
import InputPassword from '~/components/InputPassword'
import InputText from '~/components/InputText'

import {
  Container,
  Button
} from './styles'

const StartScreen = () => {
  const formRef = useRef()
  return (
    <Container>
      <Form
        ref={ formRef }
        onSubmit={ () => {} }
        schemaConstructor={ schema }
        defaultValues={ INITIAL_VALUES }
        filterEmptyValues
      >
        <InputText label="Usuario" name="user"/>
        <InputPassword label="Senha" name="password"/>
        <Button>Enviar</Button>
      </Form>
    </Container>
  )
}

export default StartScreen
