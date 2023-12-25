import { useQuery } from "@tanstack/react-query";
import { ApiResponse } from "./useData"
import apiClient from "../services/api-client";
import platforms from "../data/platforms";
export interface Platforms {
    name: string;
    id: number;
    slug: string;
}


const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<ApiResponse<Platforms>>('platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs,
    initialData:{count:platforms.length,results:platforms}
})

export default usePlatform
