import CssBaseLine from '@material-ui/core/CssBaseline'
import theme from '../shared/styles/temaconfig'
import { PersistGate } from 'redux-persist/integration/react'
import { storeWrapper, _Store } from '../store'
import { useStore } from 'react-redux'
import GlobalStyle from '../shared/styles/global'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core'

function MyApp({ Component, pageProps }) {
  const store = useStore() as _Store
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <title>Kimetsu Store</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <GlobalStyle />

        <PersistGate persistor={store._persistor} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </ThemeProvider>
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
