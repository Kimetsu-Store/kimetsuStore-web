import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import { footerUseStyles } from './Footer.styles'

const Footer: FC = props => {
  const classes = footerUseStyles()
  return (
    <Grid container className={classes.footer}>
      <Typography className={classes.titulo}>Kimetsu Store</Typography>
    </Grid>
  )
}

export default Footer
