import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { abrirModal } from '../../../ducks/livros'
import LivroSimplificado from '../../../models/Livro/livroSimplificado'
import { secaoUseStyles } from './Secao.styles'

interface Props {
  titulo: string
  livros: LivroSimplificado[]
}

const Secao: FC<Props> = props => {
  const { titulo, livros } = props
  const dispatch = useDispatch()

  const handleClickLivro = idLivro => {
    dispatch(abrirModal(idLivro))
  }

  const classes = secaoUseStyles()
  return (
    <Grid container className={classes.secaoContainer}>
      <Typography className={classes.titulo}>{titulo}</Typography>

      <Grid container className={classes.livrosContainer}>
        {livros.map((livro, index) => (
          <Grid
            key={index}
            item
            container
            onClick={() => handleClickLivro(livro.id)}
            className={classes.livroContainer}
          >
            <Grid container className={classes.imagemContainer}>
              <img
                src={livro.imagem}
                alt="Imagem do livro"
                className={classes.imagem}
              />
            </Grid>

            <Typography className={classes.tituloLivro}>
              {livro.nome}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default Secao
