import { Button, Grid, Typography } from '@material-ui/core'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { FC, useState } from 'react'
import { headerMobileBoxUseStyles } from './HeaderMobileBox.styles'

class ItemMenu {
  titulo: string
}
interface PropsOpcoes {
  boxAberto: boolean
  titulo: string
  itens: ItemMenu[]
  handleClickItem: (autor) => void
}

const BotaoOpcoes: FC<PropsOpcoes> = props => {
  const { itens, titulo, handleClickItem, boxAberto } = props

  const handleClickMenuItem = itemTitulo => {
    handleClickItem(itemTitulo)
  }

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
                onClick={() => handleClickMenuItem(item.titulo)}
                className={classes.opcao}
              >
                {item.titulo}
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
  autores: ItemMenu[]
  categorias: ItemMenu[]
  handleClickCategoria: (categoria) => void
  handleClickAutor: (autor) => void
}

const HeaderMobileBox: FC<Props> = props => {
  const {
    autores,
    categorias,
    handleClickCategoria,
    handleClickAutor,
    boxAberto
  } = props

  const classes = headerMobileBoxUseStyles({ aberto: boxAberto })
  return (
    <Grid container item className={classes.container}>
      <BotaoOpcoes
        boxAberto={boxAberto}
        handleClickItem={handleClickCategoria}
        titulo="Categorias"
        itens={categorias}
      />
      <BotaoOpcoes
        boxAberto={boxAberto}
        handleClickItem={handleClickAutor}
        titulo="Autores"
        itens={autores}
      />
    </Grid>
  )
}

export default HeaderMobileBox
