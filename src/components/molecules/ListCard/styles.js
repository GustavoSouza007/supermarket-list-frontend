import styled from 'styled-components'

export const ListCardContainer = styled.div`
  width: 100%;
  height: 58px;
  min-height: 58px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-radius: 12px;
  margin-bottom: 28px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.light};
`

export const CheckImage = styled.img`
  width: 26px;
  height: 26px;
  padding-right: 12px;
  cursor: pointer;
`

export const TextContainer = styled.div`
  display: flex;
  width: 96%;
  flex-direction: column;
`

export const ArrowButton = styled.button`
  width: 60px;
  height: 40px;
  border: transparent;
  background-color: transparent;
  padding-left: 20px;
  cursor: pointer;
`

export const ArrowIcon = styled.img.attrs({
  src: '/images/arrow.svg',
  alt: 'arrow-icon'
})`
  width: 6px;
  height: 12px;
  object-fit: contain;
`
