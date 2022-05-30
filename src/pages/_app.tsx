import { ThemeContextProvider } from '@/context/ThemeContext'
import '@fontsource/inter/200.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
import '@fontsource/playfair-display/900.css'
import GlobalStyles from '@styles/GlobalStyles'
import { AppProps } from 'next/app'
import React from 'react'

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
