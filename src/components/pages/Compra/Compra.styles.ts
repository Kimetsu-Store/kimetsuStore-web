import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../../shared/styles/breakpoints'
import {
  BRANCO,
  VERDEAGUA,
  VERDEAGUAESCURO
} from '../../../shared/styles/colors'
import theme from '../../../shared/styles/temaconfig'

export const compraUseStyles = makeStyles(() => ({
  container: {
    [theme.breakpoints.up(Breakpoints.xl)]: {
      flexDirection: 'row-reverse',
      flexWrap: 'nowrap'
    }
  },
  resumo: {
    [theme.breakpoints.up(Breakpoints.xl)]: {
      justifyContent: 'flex-end'
    }
  },
  formulario: {
    flexGrow: 1
  },
  botaoMobile: {
    justifyContent: 'flex-end',

    [theme.breakpoints.up(Breakpoints.xl)]: {
      display: 'none'
    }
  },
  botaoDesktop: {
    display: 'none',
    justifyContent: 'flex-end',

    [theme.breakpoints.up(Breakpoints.xl)]: {
      display: 'flex'
    }
  },
  botaoComprar: {
    color: BRANCO,
    marginTop: 10,
    padding: 25,
    backgroundColor: VERDEAGUA,
    borderRadius: 5,
    height: 40,

    '&:hover': {
      backgroundColor: VERDEAGUAESCURO
    }
  }
}))
