import type { AppProps } from 'next/app'
import { IntercomProvider } from '@/utils/intercomProvider'
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntercomProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IntercomProvider>
  )
}
