import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Newsletter from '@/components/Newsletter'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes"


export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider attribute="class">
        <Header />
          <Component {...pageProps} />
          <Newsletter />
        <Footer />
    </ThemeProvider>
  )
}
