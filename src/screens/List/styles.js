import styled from 'styled-components'

export const ListScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const ContentContainer = styled.div`
  width: 60vw;
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 24px;
  padding: 24px;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 890px) {
    width: 74vw;
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const LogoImage = styled.img.attrs({
  src: '/images/logo.png',
  alt: 'supermarket-list-logo'
})`
  width: 72px;
  height: 72px;

  @media (max-width: 1050px) {
    width: 64px;
    height: 64px;
  }

  @media (max-width: 910px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 680px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 570px) {
    width: 40px;
    height: 40px;
  }
`

export const HeaderButtonContainer = styled.div`
  width: 160px;
  padding-top: 6px;

  @media (max-width: 1050px) {
    width: 140px;
  }

  @media (max-width: 910px) {
    width: 120px;
  }

  @media (max-width: 680px) {
    width: 110px;
  }

  @media (max-width: 610px) {
    display: none;
  }
`

export const MobileHeaderButtonContainer = styled.div`
  display: none;

  @media (max-width: 610px) {
    display: flex;
    width: 42px;
  }

  @media (max-width: 520px) {
    width: 46px;
    padding-left: 22px;
  }

  @media (max-width: 430px) {
    width: 52px;
  }
`

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
