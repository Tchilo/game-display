import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genre";
import ms from "ms";
import Genres from "../entities/Genres";

const apiclient = new APIClient<Genres>('/genres')
const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: apiclient.getAll,
        staleTime: ms('24h'),
        initialData: genres
    })
}

export default useGenres