import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { BRANCO, CINZA1 } from '../../shared/styles/colors'
import theme from '../../shared/styles/temaconfig'

export const footerUseStyles = makeStyles(() => ({
  footer: {
    width: '100%',
    height: 60,
    backgroundColor: CINZA1,
    color: BRANCO,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 26
  }
}))
