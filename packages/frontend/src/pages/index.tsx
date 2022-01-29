import { gql, useQuery } from '@apollo/client'
import type { NextPage } from 'next'

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
    <div>
      <h1>Hello Apollo</h1>
      {data.games.map((game) => (
        <div key={game.name}>{game.name}</div>
      ))}
    </div>
  )
}

export default Home
