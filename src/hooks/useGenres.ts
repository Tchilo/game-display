import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genre";
import ms from "ms";

export interface Genres {
    name: string;
    id: number;
    image_background: string;
}

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