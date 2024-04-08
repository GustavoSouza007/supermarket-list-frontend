import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 16px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.primary};
`

export const InputLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
  margin: 0px;
  padding-left: 6px;
  padding-top: 6px;
  padding-bottom: 4px;
`

export const InputText = styled.input`
  width: 96%;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 500;
  border: 0px transparent;
  margin-left: 6px;
  outline: none;
`
