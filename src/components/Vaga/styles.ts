import styled from 'styled-components'

export const VagaUnit = styled.li`
  border: 1px solid ${(props) => props.theme.colorPrimary};
  background-color: ${(props) => props.theme.colorSecondary};
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.colorPrimary};
    color: ${(props) => props.theme.colorSecondary};
  }
`

export const VagaTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.colorSecondary};
  background-color: ${(props) => props.theme.colorPrimary};
  color: ${(props) => props.theme.colorSecondary};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  :hover {
    border-color: ${(props) => props.theme.colorPrimary};
    background-color: ${(props) => props.theme.colorSecondary};
    color: ${(props) => props.theme.colorPrimary};
  }
`
