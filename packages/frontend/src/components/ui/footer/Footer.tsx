import { Container, Text } from '@nextui-org/react'

export const Footer = () => {
  return (
    <Container
      css={{
        alignItems: 'center',
        display: 'flex',
        height: '30px',
        justifyContent: 'center',
      }}
    >
      <Text
        as={'small'}
        css={{
          fontSize: '12px',
          textAlign: 'center',
        }}
      >
        ©2022 Ryosuke Mizuno
      </Text>
    </Container>
  )
}
