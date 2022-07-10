import { Grid, TablePagination } from '@material-ui/core'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Livro } from '../..'
import {
  obterLivrosPorCategoria,
  obterLivrosPorPalavra
} from '../../../ducks/livros'
import { RootState } from '../../../store'
import { GeneralContainer } from '../../GeneralContainer'
import { ListagemVazia } from '../../ListagemVazia'
import { Loader } from '../../Loader'
import { listagemLivrosUseStyles } from './ListagemLivros.styles'

interface Props {
  categoria?: string
  palavra?: string
}

const ListagemLivros: FC<Props> = props => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { livrosListagem, loadingListagem, totalPaginasListagem } = useSelector(
    (state: RootState) => state.livros
  )
  const [livrosPorPagina, setLivrosPorPagina] = useState(10)
  const [pagina, setPagina] = useState(0)

  const handleOnChangePagina = (_, pagina: number) => {
    setPagina(pagina)
  }

  const handleOnChangeLivrosPorPagina = (e: ChangeEvent<HTMLInputElement>) => {
    setLivrosPorPagina(parseInt(e.target.value))
  }

  useEffect(() => {
    if (props.categoria) {
      dispatch(
        obterLivrosPorCategoria(props.categoria, pagina, livrosPorPagina)
      )
    } else if (props.palavra) {
      dispatch(obterLivrosPorPalavra(props.palavra, pagina, livrosPorPagina))
    } else {
      router.push('/')
    }
  }, [pagina, livrosPorPagina, props.categoria, props.palavra])

  const classes = listagemLivrosUseStyles()
  return (
    <Grid container className={classes.listagemLivrosContainer}>
      <GeneralContainer>
        {livrosListagem.length > 0 && !loadingListagem && (
          <Grid container className={classes.listagemLivros}>
            {livrosListagem.map((livro, index) => (
              <Livro livro={livro} key={index} />
            ))}
          </Grid>
        )}

        {livrosListagem.length === 0 && !loadingListagem && <ListagemVazia />}

        {loadingListagem && <Loader />}

        <TablePagination
          component="div"
          rowsPerPageOptions={[10, 15, 20]}
          count={12}
          colSpan={3}
          rowsPerPage={livrosPorPagina}
          page={pagina}
          onPageChange={handleOnChangePagina}
          onRowsPerPageChange={handleOnChangeLivrosPorPagina}
          labelDisplayedRows={() => `${pagina + 1} de ${totalPaginasListagem}`}
          labelRowsPerPage="Livros"
        />
      </GeneralContainer>
    </Grid>
  )
}

export default ListagemLivros
