import { Button, SimpleGrid, Text,Box } from "@chakra-ui/react";
import useGameHook from "../hooks/useGameHook";
import GameCard from "./GameCard";
import GameCardSeleton from "./GameCardSeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import { Fragment } from "react";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading,isFetchingNextPage,fetchNextPage,hasNextPage } = useGameHook(gameQuery)

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    return (
        <Box padding='10px'>
            {error && <Text>{error.message}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} >

                {isLoading && skeletons.map((skeleton) =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSeleton />
                    </GameCardContainer>
                )}
                {
                    data?.pages.map((pages, index) => <Fragment key={index}>
                        {
                            pages.results.map((game) =>
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            )
                        }
                    </Fragment>)
                }
            </SimpleGrid>
            {hasNextPage && <Button my={5} onClick={() => fetchNextPage()}>{isFetchingNextPage?'Loading...':'Load More' }</Button>}
        </Box>
    )
}

export default GameGrid
