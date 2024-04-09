import styled from 'styled-components'

export const ListRenderContainer = styled.div`
  width: 100%;
  height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const InfoListItems = styled.div`
  display: flex;
  text-align: center;

  @media (max-width: 610px) {
    display: none;
  }
`

export const MobileInfoListItems = styled.div`
  display: none;

  @media (max-width: 610px) {
    display: flex;
    text-align: center;
  }
`
