import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 500;
  border-radius: 24px;
  border: 0px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.light : theme.colors.primary};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.light};
`

export const ButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 120px;
`

export const TextSpacer = styled.div`
  position: absolute;
  text-align: center;
`
