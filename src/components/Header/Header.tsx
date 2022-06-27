import { Badge, Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ShoppingCart } from '@material-ui/icons'
import { FC, useEffect, useState } from 'react'
import { GeneralContainer } from '../GeneralContainer'
import { MenuOpcoes } from '../MenuOpcoes'
import { SearchBar } from '../SearchBar'
import { headerUseStyles } from './Header.styles'
import { HeaderMobileBox } from '../HeaderMobileBox'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { obterCategorias } from '../../ducks/filtros'
import { ItemMenu } from '../MenuOpcoes/MenuOpcoes'

const Header: FC = () => {
  const dispatch = useDispatch()
  const [aberto, setAberto] = useState(false)

  const { categorias } = useSelector((state: RootState) => state.filtros)

  const handleClickCategoria = categoria => {
    setAberto(false)
    console.log(categoria)
  }

  const obterCategoriasMapeadas = () => {
    return categorias.map(categoria => {
      const item: ItemMenu = {
        id: categoria.id,
        nome: categoria.nome
      }
      return item
    })
  }

  useEffect(() => {
    dispatch(obterCategorias())
  }, [])

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
              itensMenu={obterCategoriasMapeadas()}
              handleClickItem={handleClickCategoria}
            />

            <SearchBar />
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
        </Grid>

        <HeaderMobileBox
          boxAberto={aberto}
          categorias={obterCategoriasMapeadas()}
          handleClickCategoria={handleClickCategoria}
        />
      </GeneralContainer>
    </Grid>
  )
}

export default Header
