import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../../shared/styles/breakpoints'
import { VERDEAGUA } from '../../../shared/styles/colors'
import theme from '../../../shared/styles/temaconfig'

export const secaoUseStyles = makeStyles(() => ({
  secaoContainer: {},
  titulo: {
    width: '100%',
    fontSize: 36,
    color: VERDEAGUA,
    borderBottom: `3px solid ${VERDEAGUA}`,
    margin: '20px 0 20px 0',

    [theme.breakpoints.down(Breakpoints.lg)]: {
      fontSize: 30
    },
    [theme.breakpoints.down(Breakpoints.sm)]: {
      textAlign: 'center'
    }
  },
  livrosContainer: {
    gap: 20,
    [theme.breakpoints.down(Breakpoints.md)]: {
      gap: 15
    },

    [theme.breakpoints.down(Breakpoints.sm)]: {
      justifyContent: 'center'
    }
  },
  livroContainer: {
    flexDirection: 'column',
    width: 'fit-content'
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

    [theme.breakpoints.down(Breakpoints.sm)]: {
      fontSize: 18
    }
  }
}))
