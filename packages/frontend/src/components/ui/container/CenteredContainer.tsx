import { Container } from '@nextui-org/react'
import type { ReactNode } from 'react'

type CenteredContainerProps = {
  children: ReactNode
}

export const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return (
    <Container
      css={{
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      {children}
    </Container>
  )
}
