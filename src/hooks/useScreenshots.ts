import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShots";



const useScreenshots = (slug: number) => {
    const api = new APIClient<ScreenShot>(`/games/${slug}/screenshots`)
    return useQuery({
        queryKey: ['screenshots', slug],
        queryFn: () => api.getAll({params:{id:slug}})
    })

}

export default useScreenshots
