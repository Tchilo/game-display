import { useQuery } from "@tanstack/react-query";
import platformsData from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import { Platform } from "../entities/Platform";


const apiclient = new APIClient<Platform>('/platforms/lists/parents')

const usePlatform = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiclient.getAll,
    staleTime: ms('24h'),
    initialData: platformsData
})

export default usePlatform
