import { Badge, Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ShoppingCart } from '@material-ui/icons'
import { FC, useState } from 'react'
import { GeneralContainer } from '../GeneralContainer'
import { MenuOpcoes } from '../MenuOpcoes'
import { SearchBar } from '../SearchBar'
import { headerUseStyles } from './Header.styles'
import { HeaderMobileBox } from '../HeaderMobileBox'

const itensMenuCategoriaMock = [{ titulo: 'Mobile' }, { titulo: 'Front' }]
const itensMenuAutoresMock = [
  { titulo: 'Autor blabbla bal abla' },
  { titulo: 'Autor blabbla bal abla2' }
]
const Header: FC = () => {
  const [aberto, setAberto] = useState(false)
  const handleClickCategoria = categoria => {
    setAberto(false)
    console.log(categoria)
  }

  const handleClickAutor = autor => {
    setAberto(false)
    console.log(autor)
  }

  const classes = headerUseStyles()
  return (
    <Grid container className={classes.container}>
      <GeneralContainer>
        <Grid container className={classes.containerContentDesktop}>
          <Typography className={`${classes.titulo} ${classes.tituloDesktop}`}>
            Kimetsu Store
          </Typography>
          <Typography className={`${classes.titulo} ${classes.tituloMobile}`}>
            KS
          </Typography>

          <Grid container item className={classes.opcoes}>
            <MenuOpcoes
              titulo="Categorias"
              itensMenu={itensMenuCategoriaMock}
              handleClickItem={handleClickCategoria}
            />

            <SearchBar />

            <Badge badgeContent={4} color="primary">
              <ShoppingCart className={classes.shoppingCart} />
            </Badge>
          </Grid>
        </Grid>

        <Grid container className={classes.containerContentMobile}>
          <Grid
            item
            container
            onClick={() => setAberto(!aberto)}
            className={classes.tituloIconMobile}
          >
            <MenuIcon className={classes.IconMobile} />

            <Typography className={`${classes.titulo} ${classes.tituloMobile}`}>
              KS
            </Typography>
          </Grid>

          <SearchBar />

          <Badge badgeContent={4} color="primary">
            <ShoppingCart className={classes.shoppingCart} />
          </Badge>
        </Grid>

        <HeaderMobileBox
          boxAberto={aberto}
          categorias={itensMenuCategoriaMock}
          autores={itensMenuAutoresMock}
          handleClickCategoria={handleClickCategoria}
          handleClickAutor={handleClickAutor}
        />
      </GeneralContainer>
    </Grid>
  )
}

export default Header
