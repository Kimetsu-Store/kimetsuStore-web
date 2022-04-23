import { Button, Icon, Menu, MenuItem, Typography } from '@material-ui/core'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { FC, useState } from 'react'
import { menuOpcoesUseStyles } from './MenuOpcoes.styles'

class ItemMenu {
  titulo: string
}

interface Props {
  titulo: string
  itensMenu: ItemMenu[]
  handleClickItem: (itemTitulo) => void
}

const MenuOpcoes: FC<Props> = props => {
  const { titulo, itensMenu, handleClickItem } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickMenuItem = itemTitulo => {
    handleClose()
    handleClickItem(itemTitulo)
  }

  const classes = menuOpcoesUseStyles()
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.button}
      >
        <Typography className={classes.titulo}>{titulo}</Typography>
        <ArrowDownward className={classes.arrow} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
        classes={{ paper: classes.menu }}
      >
        {itensMenu.map((item, index) => (
          <MenuItem
            className={classes.menuItem}
            key={index}
            onClick={() => handleClickMenuItem('teste')}
          >
            {item.titulo}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default MenuOpcoes
