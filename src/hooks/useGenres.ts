import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genre";

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
        staleTime: 24 * 60 * 60 * 1000, //24hrs
        initialData: { count: genres.length, results: genres }
    })
}

export default useGenres