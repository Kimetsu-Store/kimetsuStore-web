import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../../shared/styles/breakpoints'
import { CINZA1, CINZA2, VERDEAGUA } from '../../../shared/styles/colors'
import theme from '../../../shared/styles/temaconfig'

export const compraConcluidaUseStyles = makeStyles(() => ({
  container: {
    flexDirection: 'column',
    padding: 30,
    backgroundColor: CINZA2,
    borderRadius: 5,
    boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
    width: 'fit-content',
    marginTop: 80
  },
  titulo: {
    fontSize: 20,
    color: VERDEAGUA,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',

    [theme.breakpoints.up(Breakpoints.md)]: {
      marginTop: 26,
      fontSize: 30
    }
  },
  item: {
    fontSize: 20,
    color: CINZA1,
    textAlign: 'center'
  }
}))
