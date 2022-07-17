import { makeStyles } from '@material-ui/core'
import { BRANCO, CINZA1 } from '../../shared/styles/colors'

export const footerUseStyles = makeStyles(() => ({
  footerMargin: { marginTop: 60 },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: CINZA1,
    color: BRANCO,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 26,
    cursor: 'pointer'
  }
}))
