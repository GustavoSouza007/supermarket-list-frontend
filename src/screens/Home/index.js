import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Title, Subtitle } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import { toast } from 'react-toastify'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  FormContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 3) {
      toast.success('Username deve conter mais do que 3 caracteres!')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />

        <Title mw={336} fontSizeHome={24} mb={12} ta="center">
          Sua lista de supermercado <br /> mais fácil do que nunca.
        </Title>

        <Subtitle mwSubtitle={344} mbSubtitle={48} taSubtitle="center">
          Ajudamos você a organizar sua <br /> lista de compras de forma
          descomplicada.
        </Subtitle>

        <Subtitle mwDescription={452} mbDescription={16} taDescription="left">
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
