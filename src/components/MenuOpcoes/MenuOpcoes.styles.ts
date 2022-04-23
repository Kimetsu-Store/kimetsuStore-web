import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { BRANCO, VERDEAGUA } from '../../shared/styles/colors'
import theme from '../../shared/styles/temaconfig'

export const menuOpcoesUseStyles = makeStyles(() => ({
  button: {
    height: '50px',
    width: '170px',
    border: `2px solid ${VERDEAGUA}`,
    color: VERDEAGUA,
    borderRadius: 5,

    '&:hover': {
      borderColor: BRANCO,
      color: BRANCO
    },

    [theme.breakpoints.down(Breakpoints.g)]: {
      width: '130px',
      height: '40px'
    },
    [theme.breakpoints.down(Breakpoints.lg)]: {
      width: '110px',
      height: '40px'
    }
  },
  titulo: {
    fontSize: 16,
    [theme.breakpoints.down(Breakpoints.g)]: {
      fontSize: 14
    },
    [theme.breakpoints.down(Breakpoints.lg)]: {
      fontSize: 12
    }
  },
  arrow: {
    marginLeft: 5,
    fontSize: '16px'
  },
  menu: {
    top: '76px!important',

    [theme.breakpoints.down(Breakpoints.g)]: {
      top: '71px!important'
    },
    [theme.breakpoints.down(Breakpoints.lg)]: {
      top: '61px!important'
    }
  },
  menuItem: {
    width: 170,
    whiteSpace: 'break-spaces',

    [theme.breakpoints.down(Breakpoints.g)]: {
      width: 130
    },
    [theme.breakpoints.down(Breakpoints.lg)]: {
      width: 110
    }
  }
}))
