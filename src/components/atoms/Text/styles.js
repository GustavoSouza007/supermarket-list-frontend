import styled from 'styled-components'

export const Title = styled.h1`
  max-width: ${({ mw }) => mw}px;
  font-size: ${({ fontSizeHome, fontSizeList }) =>
    fontSizeHome || fontSizeList || 24}px;
  margin-left: ${({ ml }) => ml}px;
  margin-bottom: ${({ mb }) => mb}px;
  padding-top: ${({ pd }) => pd}px;
  text-align: ${({ ta }) => ta};
  line-height: 26px;
  font-weight: bold;
  color: black;

  @media (max-width: 1050px) {
    font-size: ${({ fontSizeHome, fontSizeList }) =>
      fontSizeList ? 28 : fontSizeHome}px;
  }

  @media (max-width: 910px) {
    font-size: ${({ fontSizeHome, fontSizeList }) =>
      fontSizeList ? 26 : fontSizeHome}px;
  }

  @media (max-width: 680px) {
    font-size: ${({ fontSizeHome, fontSizeList }) =>
      fontSizeList ? 24 : fontSizeHome}px;
  }

  @media (max-width: 570px) {
    font-size: ${({ fontSizeHome, fontSizeList }) =>
      fontSizeList ? 22 : fontSizeHome}px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
  }
`

export const Subtitle = styled.h3`
  max-width: ${({ mwSubtitle, mwDescription }) =>
    mwSubtitle || mwDescription}px;
  font-size: 16px;
  font-weight: 500;
  text-align: ${({ taSubtitle, taDescription }) => taSubtitle || taDescription};
  padding: 0px;
  margin: 0px;
  margin-bottom: ${({ mbSubtitle, mbDescription }) =>
    mbSubtitle || mbDescription}px;

  @media (max-width: 570px) {
    max-width: ${({ mwSubtitle, mwDescription }) =>
      mwDescription ? 380 : mwSubtitle}px;
  }

  @media (max-width: 460px) {
    max-width: ${({ mwSubtitle, mwDescription }) =>
      mwDescription ? 360 : mwSubtitle}px;
  }

  @media (max-width: 420px) {
    max-width: ${({ mwSubtitle, mwDescription }) =>
      mwDescription ? 300 : mwSubtitle}px;
    font-size: 14px;
  }

  @media (max-width: 375px) {
    max-width: ${({ mwSubtitle, mwDescription }) =>
      mwDescription ? 280 : mwSubtitle}px;
  }

  @media (max-width: 350px) {
    max-width: ${({ mwSubtitle, mwDescription }) =>
      mwDescription ? 260 : 452 && mwSubtitle ? 280 : 344}px;
  }
`
