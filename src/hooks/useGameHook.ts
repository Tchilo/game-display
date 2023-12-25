import { useQuery } from "@tanstack/react-query";
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
    useQuery<ApiResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiclient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.serchText
            }
        })
    })

export default useGameHook
