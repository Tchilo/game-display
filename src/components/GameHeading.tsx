import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"

import usePlatformhook from "../hooks/usePlatformhook"
import useGenre from "../hooks/useGenre"
interface Prop {
    gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Prop) => {
    const genre = useGenre(gameQuery.genreId)
    const platform = usePlatformhook(gameQuery.platformId)
    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {platform?.name || ''} {genre?.name || ''} Games
        </Heading>
    )
}

export default GameHeading
