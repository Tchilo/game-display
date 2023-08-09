import { SimpleGrid, Text } from "@chakra-ui/react";
import useGameHook from "../hooks/useGameHook";
import GameCard from "./GameCard";
import GameCardSeleton from "./GameCardSeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props {
    selectedGenre: Genres | null;
}
const GameGrid = ({ selectedGenre }: Props) => {
    const { data, error, isLoading } = useGameHook(selectedGenre)

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3} padding='10px'>

                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSeleton />
                    </GameCardContainer>
                )}

                {data.map((game) =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
