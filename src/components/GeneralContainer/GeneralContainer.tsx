import { Grid } from '@material-ui/core'
import { FC } from 'react'
import { generalContainerUseStyles } from './GeneralContainer.styles'

const GeneralContainer: FC = props => {
  const classes = generalContainerUseStyles()
  return (
    <Grid container className={classes.generalContainer}>
      {props.children}
    </Grid>
  )
}

export default GeneralContainer
