import { Provider } from 'react-redux'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header>{/* // */}</Header>

      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <GlobalStyle />

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
