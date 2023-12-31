import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import ExpanableText from "./ExpanableText"
import GameAttributes from "./GameAttributes"
import GameVideo from "./GameVideo"
import GameScreenshots from "./GameScreenshots"

const GameDetails = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)
  console.log(game)
  if (isLoading) return <Spinner />
  if (error || !game) throw error
  return (
    <SimpleGrid spacing={5} columns={{ base: 1, md: 2 }}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpanableText>{game.description_raw}</ExpanableText>
        <GameAttributes game={game} />
      </Box>
      <Box>
        <GameVideo id={game.id} />
        <GameScreenshots id={game.id} />
      </Box>
    </SimpleGrid>
  )
}

export default GameDetails
