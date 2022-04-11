import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

let theme = createTheme({
  typography: {
    fontFamily: ['Lato'].join(','),
    fontSize: 12,
    htmlFontSize: 12,
    bodyBold: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 20
    }
  }
})
theme = responsiveFontSizes(theme)

export default theme
