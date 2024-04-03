import styled from 'styled-components'

export const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentContainer = styled.div`
  width: 552px;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: white;

  @media (max-width: 570px) {
    width: 450px;
    height: 620px;
  }

  @media (max-width: 460px) {
    width: 400px;
    height: 570px;
  }

  @media (max-width: 420px) {
    width: 360px;
    height: 530px;
  }

  @media (max-width: 375px) {
    width: 330px;
    height: 500px;
  }

  @media (max-width: 350px) {
    width: 300px;
    height: 470px;
  }
`

export const BagImage = styled.img.attrs({
  src: '/images/shopping-bag.svg',
  alt: 'shopping bag'
})`
  width: 220px;
  height: 220px;

  @media (max-width: 570px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 460px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 420px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 375px) {
    width: 110px;
    height: 110px;
  }

  @media (max-width: 350px) {
    width: 100px;
    height: 100px;
  }
`

export const Title = styled.h1`
  max-width: 320px;
  text-align: center;
  margin-bottom: 12px;
`

export const Subtitle = styled.h3`
  max-width: ${({ mw }) => mw || 320}px;
  text-align: ${({ align }) => align || 'center'};
  margin-bottom: ${({ mb }) => mb || 48}px;

  @media (max-width: 570px) {
    max-width: ${({ mw }) => mw === 380 || 320}px;
  }

  @media (max-width: 460px) {
    max-width: ${({ mw }) => mw === 360 || 320}px;
  }

  @media (max-width: 420px) {
    max-width: ${({ mw }) => mw === 300 || 320}px;
  }

  @media (max-width: 375px) {
    max-width: ${({ mw }) => mw === 280 || 310}px;
  }

  @media (max-width: 350px) {
    max-width: ${({ mw }) => mw === 260 || 310}px;
  }
`

export const FormContainer = styled.div`
  width: 452px;
  margin-top: ${({ mt }) => mt || 0}px;

  @media (max-width: 570px) {
    width: 380px;
  }

  @media (max-width: 460px) {
    width: 360px;
  }

  @media (max-width: 420px) {
    width: 300px;
  }

  @media (max-width: 375px) {
    width: 280px;
  }

  @media (max-width: 350px) {
    width: 260px;
    margin-top: ${({ mt }) => mt === 0 || 0}px;
  }
`
