import styled from 'styled-components'

export const SearchForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.colorSecondary};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const SearchBtn = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  border: 1px solid ${(props) => props.theme.colorPrimary};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.colorSecondary};
  margin-left: 8px;
  cursor: pointer;
`

export const SearchInputField = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.colorPrimary};
`
