import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`

export const ModalContentContainer = styled.div`
  width: 24vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 24px;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1185px) {
    width: 28vw;
  }

  @media (max-width: 1015px) {
    width: 32vw;
  }

  @media (max-width: 890px) {
    width: 38vw;
  }

  @media (max-width: 730px) {
    width: 42vw;
  }

  @media (max-width: 630px) {
    width: 50vw;
  }

  @media (max-width: 500px) {
    width: 100vw;
  }
`

export const ModalHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const ModalCloseButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border: 0px;
  margin-left: 24px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url(images/close.svg);
`

export const ButtonsContainer = styled.div`
  width: 100%;
  min-height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: auto;
  margin-bottom: 32px;
`

export const ButtonsSpacer = styled.div`
  height: 24px;
`
