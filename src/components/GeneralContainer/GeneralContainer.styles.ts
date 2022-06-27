import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import theme from '../../shared/styles/temaconfig'

export const generalContainerUseStyles = makeStyles(() => ({
  generalContainer: {
    width: '80%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

    [theme.breakpoints.down(Breakpoints.xl)]: {
      width: '90%'
    }
  }
}))
