import { useQuery } from "@tanstack/react-query";
import platformsData from "../data/platforms";
import APIClient from "../services/api-client";


export interface Platform {
    name: string;
    id: number;
    slug: string;
}

const apiclient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiclient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24hrs,
    initialData:platformsData
})

export default usePlatform
