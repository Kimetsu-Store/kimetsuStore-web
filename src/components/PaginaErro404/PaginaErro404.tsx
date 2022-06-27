import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { GeneralContainer } from '../GeneralContainer'
import { paginaErro404UseStyles } from './PaginaErro404.styles'

const PaginaErro404: React.FC = () => {
  const classes = paginaErro404UseStyles()
  return (
    <GeneralContainer>
      <Grid container className={classes.container}>
        <Typography className={classes.texto}>
          Página não encontrada...
        </Typography>
        <Typography className={classes.texto}>:-(</Typography>
      </Grid>
    </GeneralContainer>
  )
}

export default PaginaErro404
