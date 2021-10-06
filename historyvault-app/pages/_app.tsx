import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>History Vault</title>
        <meta/>
        <link href="https://fonts.googleapis.com/css?family=Merriweather:300,400,500,700" rel="stylesheet" />
        <link href="//db.onlinewebfonts.com/c/07a38bbad54db72a40b406bed1c72f53?family=Gotham+Pro" rel="stylesheet" type="text/css"/>

      </Head>
    <ThemeProvider theme={theme}> 
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
  )
}
export default MyApp
