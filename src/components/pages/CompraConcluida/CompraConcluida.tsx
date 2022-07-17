import { Grid, Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { Footer } from '../../Footer'
import { GeneralContainer } from '../../GeneralContainer'
import { Header } from '../../Header'
import { compraConcluidaUseStyles } from './CompraConcluida.styles'

const CompraConcluida: FC = props => {
  const router = useRouter()
  const { numero, valor } = router.query

  console.log(numero)
  console.log(valor)

  const classes = compraConcluidaUseStyles()
  return (
    <Grid container>
      <Header />

      <GeneralContainer>
        <Grid container className={classes.container}>
          <Typography className={classes.titulo}>
            Compra realizada com sucesso!
          </Typography>
          <Typography className={classes.item}>
            N.º do pedido: {numero}
          </Typography>
          <Typography className={classes.item}>Valor total: {valor}</Typography>
          <Typography className={classes.item}>
            Seu pedido será enviado via correio após confirmado o pagamento
          </Typography>
        </Grid>
      </GeneralContainer>

      <Footer />
    </Grid>
  )
}

export default CompraConcluida
