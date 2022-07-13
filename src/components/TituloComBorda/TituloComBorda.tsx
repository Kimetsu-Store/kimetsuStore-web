import { Grid, Typography } from '@material-ui/core'
import { FC } from 'react'
import { GeneralContainer } from '../GeneralContainer'
import { tituloComBordaUseStyles } from './TituloComBorda.styles'
interface Props {
  titulo: string
}
const TituloComBorda: FC<Props> = props => {
  const classes = tituloComBordaUseStyles()
  return (
    <Grid container>
      <GeneralContainer>
        <Typography className={classes.titulo}>{props.titulo}</Typography>
      </GeneralContainer>
    </Grid>
  )
}

export default TituloComBorda
