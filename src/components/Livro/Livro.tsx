import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { abrirModal } from '../../ducks/livros'
import LivroDetalhado from '../../models/Livro/livroDetalhado'
import { livroUseStyles } from './Livro.styles'

interface Props {
  livro: LivroDetalhado
}

const Livro: FC<Props> = props => {
  const { livro } = props
  const dispatch = useDispatch()

  const handleClickLivro = (livro: LivroDetalhado) => {
    dispatch(abrirModal(livro))
  }

  const classes = livroUseStyles()
  return (
    <Grid
      item
      container
      onClick={() => handleClickLivro(livro)}
      className={classes.livroContainer}
    >
      <Grid container className={classes.imagemContainer}>
        <img
          src={livro.capa}
          alt="Imagem do livro"
          className={classes.imagem}
        />
      </Grid>

      <Typography className={classes.tituloLivro}>{livro.titulo}</Typography>
    </Grid>
  )
}

export default Livro
