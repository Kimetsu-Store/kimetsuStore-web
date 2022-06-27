import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { BRANCO, CINZA1, VERDEAGUA } from '../../shared/styles/colors'
import theme from '../../shared/styles/temaconfig'

export const headerUseStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: CINZA1,

    [theme.breakpoints.down(Breakpoints.lg)]: {
      height: 80
    },
    [theme.breakpoints.down(Breakpoints.md)]: {
      height: 65
    }
  },
  containerContentDesktop: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    gap: 100,

    [theme.breakpoints.down(Breakpoints.xl)]: {
      gap: 80
    },
    [theme.breakpoints.down(Breakpoints.g)]: {
      gap: 50
    },
    [theme.breakpoints.down(Breakpoints.lg)]: {
      gap: 20
    },
    [theme.breakpoints.down(Breakpoints.md)]: {
      display: 'none'
    }
  },
  titulo: {
    fontSize: '36px',
    color: VERDEAGUA,
    minWidth: 'max-content',

    [theme.breakpoints.down(Breakpoints.g)]: {
      fontSize: '30px'
    }
  },
  tituloDesktop: {
    display: 'inline',
    [theme.breakpoints.down(Breakpoints.lg)]: {
      display: 'none'
    }
  },
  tituloMobile: {
    display: 'none',
    [theme.breakpoints.down(Breakpoints.lg)]: {
      display: 'inline'
    }
  },
  opcoes: {
    gap: 20,
    flexWrap: 'nowrap',
    alignItems: 'center'
  },
  containerContentMobile: {
    display: 'none',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 10,

    [theme.breakpoints.down(Breakpoints.md)]: {
      display: 'flex'
    }
  },
  tituloIconMobile: {
    alignItems: 'center',
    width: 'fit-content',
    flexWrap: 'nowrap'
  },
  IconMobile: {
    color: VERDEAGUA,
    marginRight: 10
  }
}))
