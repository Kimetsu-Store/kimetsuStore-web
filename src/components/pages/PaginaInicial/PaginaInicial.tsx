import { Grid } from '@material-ui/core'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { teste } from '../../../ducks/filtros'
import { RootState } from '../../../store'
import { Footer } from '../../Footer'
import { Header } from '../../Header'
import { paginaInicialUseStyles } from './PaginaInicial.styles'
import Secoes from './Secoes'

const PaginaInicial: FC = () => {
  const dispatch = useDispatch()
  const { categorias, mensagemErro } = useSelector(
    (state: RootState) => state.filtros
  )

  const classes = paginaInicialUseStyles()
  return (
    <Grid container>
      <Header />
      <Secoes />
      <Footer />
    </Grid>
  )
}

export default PaginaInicial
