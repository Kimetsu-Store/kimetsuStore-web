import { makeStyles } from '@material-ui/core'
import Breakpoints from '../../shared/styles/breakpoints'
import { BRANCO, VERDEAGUA } from '../../shared/styles/colors'
import theme from '../../shared/styles/temaconfig'

export const searchBarUseStyles = makeStyles(() => ({
  container: {
    height: '50px',
    width: '100%',
    flexGrow: 1,
    border: `2px solid ${VERDEAGUA}`,
    color: VERDEAGUA,
    borderRadius: 25,
    alignItems: 'center',
    padding: '0 10px 0 10px',
    flexWrap: 'nowrap',
    '&:hover': {
      borderColor: BRANCO,
      color: BRANCO
    },

    [theme.breakpoints.down(Breakpoints.g)]: {
      height: '40px'
    }
  },
  textFieldContainer: { width: '100%' },
  searchIcon: { fontSize: 22, marginRight: 5 },
  textField: { border: 'none', textUnderline: 'none' },
  placeholder: { color: BRANCO }
}))
