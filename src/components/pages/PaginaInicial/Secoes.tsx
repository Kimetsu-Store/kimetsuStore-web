import { Grid } from '@material-ui/core'
import { FC } from 'react'
import LivroSimplificado from '../../../models/Livro/livroSimplificado'
import Secao from './Secao'
import { secoesUseStyles } from './Secoes.styles'

const livrosSecaoMock: LivroSimplificado[] = [
  {
    id: 1,
    nome: 'Livro teste1',
    imagem: 'https://static-cse.canva.com/blob/759754/IMAGE1.jpg'
  },
  {
    id: 2,
    nome: 'Livro teste2',
    imagem: 'https://static-cse.canva.com/blob/759754/IMAGE1.jpg'
  },
  {
    id: 3,
    nome: 'Livro teste3',
    imagem: 'https://static-cse.canva.com/blob/759754/IMAGE1.jpg'
  }
]

const Secoes: FC = () => {
  const classes = secoesUseStyles()
  return (
    <Grid container className={classes.secoesContainer}>
      <Secao titulo="Mobile" livros={livrosSecaoMock} />

      <Secao titulo="FrontEnd" livros={livrosSecaoMock} />

      <Secao titulo="BackEnd" livros={livrosSecaoMock} />
    </Grid>
  )
}

export default Secoes
