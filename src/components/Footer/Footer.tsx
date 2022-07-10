import { Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { footerUseStyles } from './Footer.styles'

const Footer: FC = props => {
  const router = useRouter()
  const handleIrParaHome = () => {
    router.push(`/`)
  }

  const classes = footerUseStyles()
  return (
    <>
      <Grid container className={classes.footerMargin}></Grid>
      <Grid container className={classes.footer}>
        <Typography className={classes.titulo} onClick={handleIrParaHome}>
          Kimetsu Store
        </Typography>
      </Grid>
    </>
  )
}

export default Footer
