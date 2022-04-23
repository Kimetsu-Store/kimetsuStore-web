import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import theme from '../../shared/styles/temaconfig'

export const generalContainerUseStyles = makeStyles(() => ({
  generalContainer: {
    width: '80%',
    height: '100%',
    margin: 'auto',
    [theme.breakpoints.down(Breakpoints.xl)]: {
      width: '90%'
    }
  }
}))
