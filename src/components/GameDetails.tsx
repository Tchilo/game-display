import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Box, Heading, Spinner, Text } from "@chakra-ui/react"

const GameDetails = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)

  if(isLoading) return <Spinner/>
  if (error || !game) throw error
  
  return (
    <Box>
      <Heading>{game.name}</Heading>
      <Text>{ game.description_raw}</Text>
      game details
    </Box>
  )
}

export default GameDetails
