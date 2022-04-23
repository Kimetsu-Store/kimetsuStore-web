import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(',')
  }
})
theme = responsiveFontSizes(theme)

export default theme
