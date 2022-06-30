import { makeStyles, Theme } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { BRANCO, CINZA1, VERDEAGUA } from '../../shared/styles/colors'

interface Props {
  aberto: boolean
}

const getTranslation = (props: Props) => {
  const aberto = 'translate(0)'
  const fechado = 'translate(-100%)'

  return props.aberto ? aberto : fechado
}

export const headerMobileBoxUseStyles = makeStyles<Theme, Props>(theme => ({
  container: {
    position: 'absolute',
    top: 65,
    left: 0,
    zIndex: 1,
    height: '100vh',
    width: '80%',
    backgroundColor: VERDEAGUA,
    flexDirection: 'column',
    display: 'none',
    boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px',
    transform: props => getTranslation(props),
    transition: 'transform 0.5s ease-in-out',

    [theme.breakpoints.down(Breakpoints.md)]: {
      display: 'flex'
    }
  },
  itemLabel: {
    height: '50px',
    width: '100%',
    borderBottom: `2px solid ${BRANCO}`,
    color: BRANCO,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 16
  },
  arrow: {
    marginLeft: 5,
    fontSize: '16px'
  },
  botaoOpcoesContainer: {},
  opcoes: {
    padding: 10,
    color: BRANCO,
    gap: 5
  },
  opcao: {
    padding: 8,
    justifyContent: 'center',
    backgroundColor: CINZA1,
    borderRadius: 5
  }
}))
