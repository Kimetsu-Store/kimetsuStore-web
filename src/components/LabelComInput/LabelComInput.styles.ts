import { makeStyles } from '@material-ui/core'
import { VERDEAGUA } from '../../shared/styles/colors'

export const labelComInputUseStyles = makeStyles(() => ({
  container: {
    width: '100%',
    flexDirection: 'column'
  },
  textField: {
    '& .MuiInput-underline:after': {
      borderBottom: `2px solid ${VERDEAGUA}`
    },
    '& .MuiFormLabel-root.Mui-focused': {
      color: VERDEAGUA
    }
  }
}))
