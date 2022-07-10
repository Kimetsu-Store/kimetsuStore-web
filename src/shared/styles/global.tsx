import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Breakpoints from './breakpoints'
import { BRANCO } from './colors'

const useStyles = makeStyles(theme => ({
  '@global': {
    html: {
      height: '100%',
      width: '100%',
      boxSizing: 'border-box'
    },
    body: {
      background: BRANCO,
      padding: 0,
      margin: 0
    },
    '::-webkit-scrollbar': {
      width: 20,
      [theme.breakpoints.down(Breakpoints.md)]: {
        width: 14
      }
    }
  }
}))

function GlobalStyle() {
  useStyles()

  return <></>
}

export default GlobalStyle
