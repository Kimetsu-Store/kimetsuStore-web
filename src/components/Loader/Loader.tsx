import { CircularProgress, Grid } from '@material-ui/core'
import { FC } from 'react'
import { loaderUseStyles } from './Loader.styles'

const Loader: FC = () => {
  const classes = loaderUseStyles()
  return (
    <Grid container className={classes.container}>
      <CircularProgress
        color="primary"
        classes={{ colorPrimary: classes.colorPrimary }}
      />
    </Grid>
  )
}

export default Loader
