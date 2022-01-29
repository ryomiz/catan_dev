import { ApolloProvider } from '@apollo/client'
import { NextUIProvider } from '@nextui-org/react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

import { client } from '../lib/apollo/client'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ApolloProvider client={client}>
      <NextUIProvider>{getLayout(<Component {...pageProps} />)}</NextUIProvider>
    </ApolloProvider>
  )
}

export default MyApp
