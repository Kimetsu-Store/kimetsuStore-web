import { Grid } from '@material-ui/core'
import { FC } from 'react'
import LivroSimplificado from '../../../models/Livro/livroSimplificado'
import { GeneralContainer } from '../../GeneralContainer'
import Secao from './Secao'
import { secoesUseStyles } from './Secoes.styles'

const livrosSecaoMock: LivroSimplificado[] = [
  {
    id: 1,
    nome: 'Livro teste1',
    imagem: 'https://images-na.ssl-images-amazon.com/images/I/71MIG6Z3F2L.jpg'
  },
  {
    id: 2,
    nome: 'Livro teste2',
    imagem: 'https://images-na.ssl-images-amazon.com/images/I/71MIG6Z3F2L.jpg'
  },
  {
    id: 3,
    nome: 'Livro teste3',
    imagem: 'https://images-na.ssl-images-amazon.com/images/I/71MIG6Z3F2L.jpg'
  }
]

const Secoes: FC = () => {
  const classes = secoesUseStyles()
  return (
    <GeneralContainer>
      <Grid container className={classes.secoesContainer}>
        <Secao titulo="Mobile" livros={livrosSecaoMock} />

        <Secao titulo="FrontEnd" livros={livrosSecaoMock} />

        <Secao titulo="BackEnd" livros={livrosSecaoMock} />
      </Grid>
    </GeneralContainer>
  )
}

export default Secoes
