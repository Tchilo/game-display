import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"
interface Prop {
    gameQuery: GameQuery
}
const GameHeading = ({ gameQuery }: Prop) => {
    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {gameQuery.platform?.name || ''} {gameQuery.genre?.name || ''} Games
        </Heading>
    )
}

export default GameHeading
