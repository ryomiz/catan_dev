import { gql, useQuery } from '@apollo/client'
import { Container } from '@nextui-org/react'
import type { NextPage } from 'next'

import { CenteredContainer } from '../components/ui/container/CenteredContainer'
import { Footer } from '../components/ui/footer/Footer'
import { Header } from '../components/ui/header/Header'

type Game = {
  name: string
}

type Games = {
  games: Game[]
}

const Home: NextPage = () => {
  const query = gql`
    query titles {
      games {
        name
      }
    }
  `

  const { data } = useQuery<Games>(query)

  if (!data) return <>まだ</>

  return (
    <Container
      css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <CenteredContainer>
        <div>
          <h1>Hello Apollo</h1>
          {data.games.map((game) => (
            <div key={game.name}>{game.name}</div>
          ))}
        </div>
      </CenteredContainer>
      <Footer />
    </Container>
  )
}

export default Home
