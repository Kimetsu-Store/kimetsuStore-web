import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { VERDEAGUA } from '../../shared/styles/colors'
import theme from '../../shared/styles/temaconfig'

export const tituloComBordaUseStyles = makeStyles(() => ({
  titulo: {
    width: '100%',
    fontSize: 36,
    color: VERDEAGUA,
    borderBottom: `3px solid ${VERDEAGUA}`,
    margin: '20px 0 20px 0',

    [theme.breakpoints.down(Breakpoints.lg)]: {
      fontSize: 30
    },
    [theme.breakpoints.down(Breakpoints.md)]: {
      fontSize: 22
    },
    [theme.breakpoints.down(Breakpoints.sm)]: {
      fontSize: 20
    }
  }
}))
