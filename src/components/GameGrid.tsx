import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameHook from "../hooks/useGameHook";
import GameCard from "./GameCard";
import GameCardSeleton from "./GameCardSeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
    const { data, error, isLoading } = useGameHook()
    console.log(data);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    console.log(data);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding='10px'>

                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer>
                        <GameCardSeleton key={skeleton} />
                    </GameCardContainer>
                )}

                {data.map((game) =>
                    <GameCardContainer>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
