import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Video } from "../entities/Videos";

const api = new APIClient<Video>('/games')


const useMovie = (slug: number) => {
    return useQuery({
        queryKey: ['trailers', slug],
        queryFn: () => api.getMovie(slug)
    })

}

export default useMovie
