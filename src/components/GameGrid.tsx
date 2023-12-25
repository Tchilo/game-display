import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGameHook from "../hooks/useGameHook";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSeleton from "./GameCardSeleton";

interface Props {
    gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, hasNextPage } = useGameHook(gameQuery)

    const fetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

    return (
        
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<Spinner />}
            >

                {error && <Text>{error.message}</Text>}
                <SimpleGrid padding='10px' columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} >

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
            </InfiniteScroll>

    )
}

export default GameGrid
