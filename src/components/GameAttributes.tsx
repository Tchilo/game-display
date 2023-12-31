import { SimpleGrid, Text } from '@chakra-ui/react'
import Game from '../entities/Game'
import CriticScore from './CriticScore'
import DetailsItem from './DetailsItem'
interface Props {
  game: Game
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as='dl'>

      <DetailsItem term="Platforms">
        {game.parent_platforms.map(p => <Text key={p.platform.id}>{p.platform.name}</Text>)}
      </DetailsItem>
      <DetailsItem term="Metascore">

        <CriticScore score={game.metacritic} />
      </DetailsItem>

      <DetailsItem term="Genres">
        {game.genres.map(g => <Text key={g.id}>{g.name}</Text>)}
      </DetailsItem>
      <DetailsItem term="Publishers">

        <Text>{game.publishers[0].name}</Text>
      </DetailsItem>
    </SimpleGrid>
  )
}

export default GameAttributes
