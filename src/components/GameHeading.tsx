import { Heading } from "@chakra-ui/react"

import usePlatformhook from "../hooks/usePlatformhook"
import useGenre from "../hooks/useGenre"
import useGameQueryStore from "../store"

const GameHeading = () => {
    const  genreId = useGameQueryStore(s => s.gamequery.genreId)
    const platformId = useGameQueryStore(s => s.gamequery.platformId)
    
    const genre = useGenre(genreId)
    const platform = usePlatformhook(platformId)
    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {platform?.name || ''} {genre?.name || ''} Games
        </Heading>
    )
}

export default GameHeading
