import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
import useGenres from "../hooks/useGenres"
import usePlatform from "../hooks/usePlatforms"
interface Prop {
    gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Prop) => {
    const { data: genres } = useGenres()
    const { data: platforms } = usePlatform()

    const genre = genres.results.find((g) => g.id === gameQuery.genreId)
    const platform = platforms.results.find((g) => g.id === gameQuery.platformId)

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {platform?.name || ''} {genre?.name || ''} Games
        </Heading>
    )
}

export default GameHeading
