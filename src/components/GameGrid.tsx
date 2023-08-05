import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameHook from "../hooks/useGameHook";
import GameCard from "./GameCard";
import GameCardSeleton from "./GameCardSeleton";


const GameGrid = () => {
    const { games, error, isLoading } = useGameHook()
    const skeletons = [1, 2, 3, 4, 5, 6,7,8,9,10]

    console.log(games);

    return (
        <>

            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding='10px'>

                {isLoading && skeletons.map((skeleton) => <GameCardSeleton key={skeleton} />)}

                {games.map((game) => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
