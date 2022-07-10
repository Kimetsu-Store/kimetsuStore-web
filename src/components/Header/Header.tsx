import { Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
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
import { useRouter } from 'next/router'

const Header: FC = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [aberto, setAberto] = useState(false)
  const [palavraPesquisa, setPalavraPesquisa] = useState('')

  const { categorias } = useSelector((state: RootState) => state.filtros)

  const handleClickCategoria = categoriaId => {
    setAberto(false)

    const categoria = categorias.find(c => c.id === categoriaId)
    router.push(`pesquisa-livros?categoria=${categoria.nome}`)
  }

  const handleSearchPalavra = () => {
    router.push(`pesquisa-livros?palavra=${palavraPesquisa}`)
  }

  const handleIrParaHome = () => {
    router.push(`/`)
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
    <Grid container className={classes.containerMargin}>
      <Grid container className={classes.container}>
        <GeneralContainer>
          <Grid container className={classes.containerContentDesktop}>
            <Typography
              className={`${classes.titulo} ${classes.tituloDesktop}`}
              onClick={handleIrParaHome}
            >
              Kimetsu Store
            </Typography>
            <Typography
              className={`${classes.titulo} ${classes.tituloMobile}`}
              onClick={handleIrParaHome}
            >
              KS
            </Typography>

            <Grid container item className={classes.opcoes}>
              <MenuOpcoes
                titulo="Categorias"
                itensMenu={obterCategoriasMapeadas()}
                handleClickItem={handleClickCategoria}
              />

              <SearchBar
                texto={palavraPesquisa}
                handleTextoChange={e => setPalavraPesquisa(e.target.value)}
                handleSearch={handleSearchPalavra}
              />
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

              <Typography
                className={`${classes.titulo} ${classes.tituloMobile}`}
              >
                KS
              </Typography>
            </Grid>

            <SearchBar
              texto={palavraPesquisa}
              handleTextoChange={e => setPalavraPesquisa(e.target.value)}
              handleSearch={handleSearchPalavra}
            />
          </Grid>
        </GeneralContainer>
        <HeaderMobileBox
          boxAberto={aberto}
          categorias={obterCategoriasMapeadas()}
          handleClickCategoria={handleClickCategoria}
        />
      </Grid>
    </Grid>
  )
}

export default Header
