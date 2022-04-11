import { Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { headerUseStyles } from './Header.styles'
const Header: FC = () => {
  const classes = headerUseStyles()
  return (
    <Grid container className={classes.container}>
      <Typography>Kimetsu Store</Typography>
    </Grid>
  )
}

export default Header
