import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { searchBarUseStyles } from './SearchBar.styles'
import { Search } from '@material-ui/icons'
import { VERDEAGUA } from '../../shared/styles/colors'

export default function SearchBar() {
  const classes = searchBarUseStyles()
  return (
    <Grid container className={classes.container}>
      <Search className={classes.searchIcon} />
      <Grid item className={classes.textFieldContainer}>
        <TextField
          id="input-search"
          className={classes.textField}
          placeholder="Pesquise..."
          classes={{ root: classes.textFieldContainer }}
          InputProps={{
            disableUnderline: true,
            style: { color: VERDEAGUA }
          }}
        />
      </Grid>
    </Grid>
  )
}
