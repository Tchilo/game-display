import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { ApiResponse } from "./useData";
import genres from "../data/genre";

export interface Genres {
    name: string;
    id: number;
    image_background: string;
}

const useGenres = () => {
    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<ApiResponse<Genres>>('/genres')
            .then(res => res.data),
        staleTime: 24 * 60 * 60 * 1000, //24hrs
        initialData: { count: genres.length, results: genres }
    })
}

export default useGenres