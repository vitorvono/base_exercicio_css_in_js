import { FormEvent, useState } from 'react'
import { SearchBtn, SearchForm, SearchInputField } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <SearchForm onSubmit={aoEnviarForm}>
      <SearchInputField
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchBtn type="submit">Pesquisar</SearchBtn>
    </SearchForm>
  )
}
export default FormVagas
