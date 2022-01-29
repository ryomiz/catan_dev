import { Container } from '@nextui-org/react'
import type { ReactNode } from 'react'

type PageWrapperProps = {
  children: ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Container
      css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      {children}
    </Container>
  )
}
