import { Button, Grid } from '@material-ui/core'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalLivroDetalhe } from '../..'
import { abrirModal } from '../../../ducks/livros'
import { RootState } from '../../../store'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import { paginaInicialUseStyles } from './PaginaInicial.styles'
import Secoes from './Secoes'

const PaginaInicial: FC = () => {
  const { modalDetalhesAberta } = useSelector(
    (state: RootState) => state.livros
  )

  const classes = paginaInicialUseStyles()
  return (
    <Grid container>
      <Header />
      <Secoes />
      <Footer />

      {modalDetalhesAberta && <ModalLivroDetalhe />}
    </Grid>
  )
}

export default PaginaInicial
