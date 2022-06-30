import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { CINZA2 } from '../../shared/styles/colors'
import theme from '../../shared/styles/temaconfig'

export const listagemVaziaUseStyles = makeStyles(() => ({
  titulo: {
    margin: 'auto',
    backgroundColor: CINZA2,
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,

    [theme.breakpoints.down(Breakpoints.md)]: {
      fontSize: 16
    }
  }
}))
