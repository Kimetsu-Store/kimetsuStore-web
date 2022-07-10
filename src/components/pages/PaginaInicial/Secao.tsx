import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import LivroDetalhado from '../../../models/Livro/livroDetalhado'
import { ListagemVazia } from '../../ListagemVazia'
import { Livro } from '../../Livro'
import { Loader } from '../../Loader'
import { secaoUseStyles } from './Secao.styles'

interface Props {
  titulo: string
  livros: LivroDetalhado[]
  loading: boolean
}

const Secao: FC<Props> = props => {
  const { titulo, livros, loading } = props

  const classes = secaoUseStyles()
  return (
    <Grid container className={classes.secaoContainer}>
      <Typography className={classes.titulo}>{titulo}</Typography>
      {livros.length > 0 && !loading && (
        <Grid container className={classes.livrosContainer}>
          {livros.map((livro, index) => (
            <Livro livro={livro} key={index} />
          ))}
        </Grid>
      )}

      {livros.length === 0 && !loading && <ListagemVazia />}

      {loading && <Loader />}
    </Grid>
  )
}

export default Secao
