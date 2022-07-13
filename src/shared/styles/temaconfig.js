import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(',')
  },
  breakpoints: {
    values: {
      sm: 450,
      md: 620,
      lg: 960,
      g: 1200,
      xl: 1440
    }
  }
})
theme = responsiveFontSizes(theme)

export default theme
