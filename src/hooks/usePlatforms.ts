import { useQuery } from "@tanstack/react-query";
import apiClient, { ApiResponse } from "../services/api-client";
import platformsData from "../data/platforms";

export interface Platform {
    name: string;
    id: number;
    slug: string;
}


const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<ApiResponse<Platform>>('platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hrs,
    initialData:{count:platformsData.length,results:platformsData}
})

export default usePlatform
