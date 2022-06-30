import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import { listagemVaziaUseStyles } from './ListagemVazia.styles'

const ListagemVazia: FC = () => {
  const classes = listagemVaziaUseStyles()
  return (
    <Grid container>
      <Typography className={classes.titulo}>
        Não foram encontrados livros...
      </Typography>
    </Grid>
  )
}

export default ListagemVazia
