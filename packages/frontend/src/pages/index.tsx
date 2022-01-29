import { Loading } from '@nextui-org/react'

import { useTitlesQuery } from './titles.generated'

export const HomeContent = () => {
  const { data } = useTitlesQuery()

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
