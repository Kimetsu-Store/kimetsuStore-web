import { Button, Grid, Typography } from '@material-ui/core'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { FC, useState } from 'react'
import { ItemMenu } from '../MenuOpcoes/MenuOpcoes'
import { headerMobileBoxUseStyles } from './HeaderMobileBox.styles'

interface PropsOpcoes {
  boxAberto: boolean
  titulo: string
  itens: ItemMenu[]
  handleClickItem: (itemId: number) => void
}

const BotaoOpcoes: FC<PropsOpcoes> = props => {
  const { itens, titulo, handleClickItem, boxAberto } = props

  const classes = headerMobileBoxUseStyles({ aberto: boxAberto })
  return (
    <>
      {itens?.length > 0 && (
        <Grid item className={classes.botaoOpcoesContainer}>
          <Grid item container className={classes.itemLabel}>
            <Typography className={classes.titulo}>{titulo}</Typography>
            <ArrowDownward className={classes.arrow} />
          </Grid>
          <Grid item container className={classes.opcoes}>
            {itens.map((item, index) => (
              <Grid
                key={index}
                item
                container
                onClick={() => handleClickItem(item.id)}
                className={classes.opcao}
              >
                {item.nome}
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </>
  )
}

interface Props {
  boxAberto: boolean
  categorias: ItemMenu[]
  handleClickCategoria: (itemId: number) => void
}

const HeaderMobileBox: FC<Props> = props => {
  const { categorias, handleClickCategoria, boxAberto } = props

  const classes = headerMobileBoxUseStyles({ aberto: boxAberto })
  return (
    <Grid container item className={classes.container}>
      <BotaoOpcoes
        boxAberto={boxAberto}
        handleClickItem={handleClickCategoria}
        titulo="Categorias"
        itens={categorias}
      />
    </Grid>
  )
}

export default HeaderMobileBox
