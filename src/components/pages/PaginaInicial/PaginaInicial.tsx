import { Grid } from '@material-ui/core'
import { FC } from 'react'
import { Header } from '../../Header'
import { paginaInicialUseStyles } from './PaginaInicial.styles'
import Secoes from './Secoes'

const PaginaInicial: FC = () => {
  const classes = paginaInicialUseStyles()
  return (
    <Grid container>
      <Header />

      <Secoes />
    </Grid>
  )
}

export default PaginaInicial