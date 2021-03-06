import { Grid } from '@material-ui/core'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obterLivrosCategoriasInicias } from '../../../ducks/livros'
import { RootState } from '../../../store'
import { GeneralContainer } from '../../GeneralContainer'
import Secao from './Secao'
import { secoesUseStyles } from './Secoes.styles'

const Secoes: FC = () => {
  const dispatch = useDispatch()
  const {
    livrosMobile,
    livrosBackEnd,
    livrosFrontEnd,
    loadingCategoriasIniciais
  } = useSelector((state: RootState) => state.livros)

  useEffect(() => {
    dispatch(obterLivrosCategoriasInicias())
  }, [])

  const classes = secoesUseStyles()
  return (
    <GeneralContainer>
      <Grid container className={classes.secoesContainer}>
        <Secao
          titulo="Mobile"
          livros={livrosMobile}
          loading={loadingCategoriasIniciais}
        />

        <Secao
          titulo="FrontEnd"
          livros={livrosFrontEnd}
          loading={loadingCategoriasIniciais}
        />

        <Secao
          titulo="BackEnd"
          livros={livrosBackEnd}
          loading={loadingCategoriasIniciais}
        />
      </Grid>
    </GeneralContainer>
  )
}

export default Secoes
