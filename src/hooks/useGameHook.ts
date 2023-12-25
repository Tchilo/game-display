import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import APIClient, { ApiResponse } from "../services/api-client";

const apiclient = new APIClient<Game>('/games')

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number
    rating_top: number
}


const useGameHook = (gameQuery: GameQuery) =>
    useInfiniteQuery<ApiResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) => apiclient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.serchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
    return lastPage.next? allPages.length + 1 : undefined 
        }
    })

export default useGameHook
