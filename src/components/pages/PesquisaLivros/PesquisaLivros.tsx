import { Grid } from '@material-ui/core'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalLivroDetalhe } from '../..'
import { RootState } from '../../../store'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import ListagemLivros from './ListagemLivros'
import { pesquisaLivrosUseStyles } from './PesquisaLivros.styles'
import PesquisaLivrosHeader from './PesquisaLivrosHeader'

interface Props {
  categoria?: string
  palavra?: string
}
const PesquisaLivros: FC<Props> = props => {
  const dispatch = useDispatch()
  const { modalDetalhesAberta } = useSelector(
    (state: RootState) => state.livros
  )

  const classes = pesquisaLivrosUseStyles()
  return (
    <Grid container>
      <Header />
      <PesquisaLivrosHeader pesquisa={props.categoria || props.palavra || ''} />
      <ListagemLivros categoria={props.categoria} palavra={props.palavra} />
      <Footer />

      {modalDetalhesAberta && <ModalLivroDetalhe />}
    </Grid>
  )
}

export default PesquisaLivros
