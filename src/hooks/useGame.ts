import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import {Game} from './useGameHook'

const api = new APIClient<Game>('/games')


const useGame = (slug:string) => {
    return useQuery({
        queryKey: ['games',slug],
        queryFn:() =>api.get(slug)
    })

}

export default useGame
