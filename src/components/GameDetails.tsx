import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Box, Heading, Spinner } from "@chakra-ui/react"
import ExpanableText from "./ExpanableText"

const GameDetails = () => {
  const { slug } = useParams()
  const { data: game, error, isLoading } = useGame(slug!)

  if (isLoading) return <Spinner />
  if (error || !game) throw error

  return (
    <Box>
      <Heading>{game.name}</Heading>
      <ExpanableText>{game.description_raw}</ExpanableText>
    </Box>
  )
}

export default GameDetails
