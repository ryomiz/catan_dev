import type { ReactElement } from 'react'

import { PageWithFooter } from '../components/layout/PageWithFooter'
import { PageWithHeader } from '../components/layout/PageWithHeader'
import { PageWrapper } from '../components/layout/PageWrapper'
import { CenteredContainer } from '../components/ui/container/CenteredContainer'
import { Footer } from '../components/ui/footer/Footer'
import { Header } from '../components/ui/header/Header'
import type { NextPageWithLayout } from './_app.page'
import { HomeContent } from './index'

const HomePage: NextPageWithLayout = () => {
  return <HomeContent />
}

HomePage.getLayout = (page: ReactElement) => {
  return (
    <PageWrapper>
      <PageWithHeader header={<Header />}>
        <PageWithFooter footer={<Footer />}>
          <CenteredContainer>{page}</CenteredContainer>
        </PageWithFooter>
      </PageWithHeader>
    </PageWrapper>
  )
}
export default HomePage
