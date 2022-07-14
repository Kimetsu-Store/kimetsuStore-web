import { Grid, Input, Typography } from '@material-ui/core'
import { ChangeEvent, FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { formatarParaReais } from '../../../utils'
import { resumoLivroUseStyles } from './ResumoLivro.styles'

interface Props {
  quantidade: number
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propriedade: string
  ) => void
}

const ResumoLivro: FC<Props> = props => {
  const { livro } = useSelector((state: RootState) => state.livros)

  const classes = resumoLivroUseStyles()
  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.imagemContainer}>
        <img
          src={livro?.capa}
          alt="Imagem do livro"
          className={classes.imagem}
        />
      </Grid>

      <Grid container className={classes.informações}>
        <Grid>
          <Typography className={classes.titulo}>{livro?.titulo}</Typography>
          <Typography className={classes.autor}>{livro?.autor.nome}</Typography>
        </Grid>

        <Grid container className={classes.qtdEPreco}>
          <Typography className={classes.qtdLabel}>Qtd:</Typography>

          <Input
            type="number"
            className={classes.input}
            classes={{ underline: classes.inputUnderline }}
            value={props.quantidade || 0}
            onChange={e => props.onChange(e, 'quandidadeDeLivros')}
          />

          <Typography className={classes.preco}>
            {formatarParaReais(livro?.preco * props.quantidade)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ResumoLivro
