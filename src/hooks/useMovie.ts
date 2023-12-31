import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Video } from "../entities/Videos";



const useMovie = (slug: number) => {
    const api = new APIClient<Video>(`/games/${slug}/movies`)
    return useQuery({
        queryKey: ['trailers', slug],
        queryFn: () => api.getAll({params:{id:slug}})
    })

}

export default useMovie
