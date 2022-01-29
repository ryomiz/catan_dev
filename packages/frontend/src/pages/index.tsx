import { gql, useQuery } from '@apollo/client'
import { Loading } from '@nextui-org/react'

type Game = {
  name: string
}

type Games = {
  games: Game[]
}

const query = gql`
  query titles {
    games {
      name
    }
  }
`

export const HomeContent = () => {
  const { data } = useQuery<Games>(query)

  if (!data) return <Loading />

  return (
    <div>
      <h1>Hello Apollo</h1>
      {data.games.map((game) => (
        <div key={game.name}>{game.name}</div>
      ))}
    </div>
  )
}
