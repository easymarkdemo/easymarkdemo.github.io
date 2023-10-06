import Head from 'next/head';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Easymark Demo</title>
        <meta property="og:title" content="Easymark Demo" />
        <meta property="og:description" content="An Embarassingly Easy Text Watermark" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
