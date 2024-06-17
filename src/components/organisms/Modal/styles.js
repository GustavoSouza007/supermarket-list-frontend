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
    width: 32vw;
  }

  @media (max-width: 1015px) {
    width: 36vw;
  }

  @media (max-width: 890px) {
    width: 42vw;
  }

  @media (max-width: 730px) {
    width: 46vw;
  }

  @media (max-width: 630px) {
    width: 100vw;
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
  margin-top: 32px;
  margin-bottom: 32px;

  @media (max-width: 500px) {
    margin-bottom: 46px;
  }
`

export const ButtonsSpacer = styled.div`
  height: 18px;
`
