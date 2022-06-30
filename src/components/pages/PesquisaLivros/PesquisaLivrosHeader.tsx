import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { GeneralContainer } from '../../GeneralContainer'
import { pesquisaLivrosHeaderUseStyles } from './PesquisaLivrosHeader.styles'
interface Props {
  pesquisa: string
}
const PesquisaLivrosHeader: FC<Props> = props => {
  const { modalDetalhesAberta } = useSelector(
    (state: RootState) => state.livros
  )

  const classes = pesquisaLivrosHeaderUseStyles()
  return (
    <Grid container>
      <GeneralContainer>
        <Typography className={classes.titulo}>
          Resultados para pesquisa &quot;{props.pesquisa}&quot;:
        </Typography>
      </GeneralContainer>
    </Grid>
  )
}

export default PesquisaLivrosHeader
