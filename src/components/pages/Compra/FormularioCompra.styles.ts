import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../../shared/styles/breakpoints'
import theme from '../../../shared/styles/temaconfig'

export const formularioCompraUseStyles = makeStyles(() => ({
  container: {},
  item: { marginBottom: 20 },
  nome: {
    [theme.breakpoints.up(Breakpoints.md)]: {
      paddingRight: 20
    }
  },
  email: {
    [theme.breakpoints.up(Breakpoints.md)]: {
      paddingRight: 20
    }
  },
  cep: {
    [theme.breakpoints.up(Breakpoints.md)]: {
      paddingRight: 20
    }
  },
  rua: {
    paddingRight: 20,

    [theme.breakpoints.up(Breakpoints.md)]: {
      paddingRight: 0
    }
  },
  numero: {
    [theme.breakpoints.up(Breakpoints.md)]: {
      paddingRight: 20
    }
  },
  complemento: {},
  bairro: {
    [theme.breakpoints.up(Breakpoints.md)]: {
      paddingRight: 20
    }
  },
  cidade: {},
  estado: { paddingRight: 20 },
  pais: {}
}))
