import { makeStyles, Theme } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import {
  BRANCO,
  CINZA2,
  VERDEAGUA,
  VERDEAGUAESCURO
} from '../../shared/styles/colors'

const modalLivroDetalheUseStyles = makeStyles((theme: Theme) => ({
  container: {
    outline: 'none',
    width: '100%',
    padding: 30,
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: BRANCO,
    boxShadow:
      'box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    borderRadius: '5px',
    overflow: 'scroll',
    height: '100%',
    display: 'block',

    [theme.breakpoints.up(Breakpoints.md)]: {
      width: 600,
      height: '80%'
    },
    [theme.breakpoints.up(Breakpoints.g)]: {
      width: 900,
      height: '80%'
    }
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'nowrap'
  },
  titulo: {
    fontSize: 18,
    fontWeight: 500,
    textTransform: 'uppercase'
  },
  iconeFechar: {
    fontSize: 20,
    cursor: 'pointer',
    alignSelf: 'flex-end'
  },
  conteudo: {
    gap: 20,

    [theme.breakpoints.up(Breakpoints.md)]: {
      flexWrap: 'nowrap'
    }
  },
  imagemEPrecoContainer: {
    width: 'fit-content',
    flexDirection: 'column',
    gap: 20
  },
  imagemContainer: {
    width: 200,
    minWidth: 200,
    height: 300
  },
  imagem: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  compraEInfoContainer: {},
  informacoes: {
    flexBasis: 'fit-content',
    flexDirection: 'column',
    flexGrow: 1,
    gap: 5
  },
  labelInfo: {
    fontSize: 14,
    fontWeight: 700
  },
  informacao: {
    fontSize: 16,
    width: 'fit-content',
    flexDirection: 'column'
  },
  sumario: {
    fontSize: 14,
    backgroundColor: CINZA2,
    padding: 5,
    borderRadius: 5
  },
  compraContainer: {
    flexDirection: 'column'
  },
  preco: {
    fontSize: 30,
    fontWeight: 700,
    width: 'fit-content'
  },
  botaoComprar: {
    marginTop: 10,
    padding: 5,
    backgroundColor: VERDEAGUA,
    borderRadius: 5,
    width: 150,
    height: 40,

    '&:hover': {
      backgroundColor: VERDEAGUAESCURO
    }
  }
}))

export { modalLivroDetalheUseStyles }
