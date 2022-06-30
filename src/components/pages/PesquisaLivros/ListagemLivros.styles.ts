import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../../shared/styles/breakpoints'
import theme from '../../../shared/styles/temaconfig'

export const listagemLivrosUseStyles = makeStyles(() => ({
  listagemLivrosContainer: {},
  listagemLivros: {
    gap: 20,
    justifyContent: 'space-between',

    [theme.breakpoints.down(Breakpoints.md)]: {
      justifyContent: 'space-around'
    }
  }
}))
