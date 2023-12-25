import { useQuery } from "@tanstack/react-query";
import apiClient, { ApiResponse } from "../services/api-client";
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