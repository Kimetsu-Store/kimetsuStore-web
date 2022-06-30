import React, { FC } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { searchBarUseStyles } from './SearchBar.styles'
import { Search } from '@material-ui/icons'
import { VERDEAGUA } from '../../shared/styles/colors'

interface Props {
  handleTextoChange: (e) => void
  texto: string
  handleSearch: () => void
}
const SearchBar: FC<Props> = props => {
  const handleKeyChange = e => {
    if (e.keyCode == 13) {
      props.handleSearch()
    }
  }
  const classes = searchBarUseStyles()
  return (
    <Grid container className={classes.container}>
      <Search className={classes.searchIcon} />
      <Grid item className={classes.textFieldContainer}>
        <TextField
          id="input-search"
          value={props.texto}
          onChange={props.handleTextoChange}
          className={classes.textField}
          placeholder="Pesquise..."
          classes={{ root: classes.textFieldContainer }}
          InputProps={{
            disableUnderline: true,
            style: { color: VERDEAGUA }
          }}
          onKeyDown={handleKeyChange}
        />
      </Grid>
    </Grid>
  )
}

export default SearchBar
