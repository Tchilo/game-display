import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { ApiResponse } from "../services/api-client";
import ms from "ms";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";
const apiclient = new APIClient<Game>('/games')

const useGameHook = () => {
    const gamequery = useGameQueryStore(s => s.gamequery)

    return useInfiniteQuery<ApiResponse<Game>, Error>({
        queryKey: ['games', gamequery],
        queryFn: ({ pageParam = 1 }) => apiclient.getAll({
            params: {
                genres: gamequery.genreId,
                parent_platforms: gamequery.platformId,
                ordering: gamequery.sortOrder,
                search: gamequery.searchText,
                page: pageParam
            }
        }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined
        },
        staleTime: ms('24h')

    })
}

export default useGameHook
