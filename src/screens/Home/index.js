import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  Title,
  Subtitle,
  FormContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('Username deve conter mais do que 3 caracteres!')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />

        <Title>
          Sua lista de supermercado <br /> mais fácil do que nunca.
        </Title>

        <Subtitle>
          Ajudamos você a organizar sua <br /> lista de compras de forma
          descomplicada.
        </Subtitle>

        <Subtitle mw={452} mb={16} align="left">
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>

        <FormContainer>
          <Input
            onChange={(text) => setUsername(text)}
            value={username}
            label="Username"
            placeholder="Ex: usuário1"
          />
        </FormContainer>

        <FormContainer mt={24}>
          <Button onClick={onClickContinue}>Continuar</Button>
        </FormContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
