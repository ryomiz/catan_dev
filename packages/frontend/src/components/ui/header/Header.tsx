import { Container, Text } from '@nextui-org/react'

export const Header = () => {
  return (
    <Container as={'header'} css={{ height: '90px' }}>
      <Text
        h1
        css={{
          textAlign: 'center',
          textGradient: '45deg, $blue500 -20%, $green500 50%',
        }}
        size={60}
      >
        CATAN YOYAKU
      </Text>
    </Container>
  )
}
