import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import theme from '../../shared/styles/temaconfig'

export const livroUseStyles = makeStyles(() => ({
  livroContainer: {
    flexDirection: 'column',
    width: 'fit-content',
    cursor: 'pointer'
  },
  imagemContainer: {
    width: 200,
    height: 300,
    borderRadius: 5,

    [theme.breakpoints.down(Breakpoints.lg)]: {
      width: 150,
      height: 225
    },
    [theme.breakpoints.down(Breakpoints.md)]: {
      width: 120,
      height: 180
    },
    [theme.breakpoints.down(Breakpoints.sm)]: {
      width: '100%',
      maxWidth: 250,
      height: 'fit-content'
    }
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 5
  },
  tituloLivro: {
    marginTop: 10,
    fontSize: 16,
    width: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    [theme.breakpoints.down(Breakpoints.sm)]: {
      fontSize: 18
    }
  }
}))
