import { Grid } from '@material-ui/core'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ModalLivroDetalhe, TituloComBorda } from '../..'
import { RootState } from '../../../store'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import ListagemLivros from './ListagemLivros'
import { pesquisaLivrosUseStyles } from './PesquisaLivros.styles'

interface Props {
  categoria?: string
  palavra?: string
}
const PesquisaLivros: FC<Props> = props => {
  const { modalDetalhesAberta } = useSelector(
    (state: RootState) => state.livros
  )

  const classes = pesquisaLivrosUseStyles()
  return (
    <Grid container>
      <Header />

      <TituloComBorda
        titulo={`Resultados para pesquisa &quot;${
          props.categoria || props.palavra || ''
        }&quot;:`}
      />

      <ListagemLivros categoria={props.categoria} palavra={props.palavra} />

      <Footer />

      {modalDetalhesAberta && <ModalLivroDetalhe />}
    </Grid>
  )
}

export default PesquisaLivros
