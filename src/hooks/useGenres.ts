import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface Genres {
    name: string;
    image_background: string;
    id: number;
}

interface ApiResults {
    count: number;
    results: Genres[]
}

const useGenres = () => {
    const [data, setData] = useState<Genres[]>([])
    const [error, setError] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        apiClient
            .get<ApiResults>('/genres', { signal: controller.signal })
            .then(res => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setLoading(false)
            })
        return () => controller.abort()
    }, [])
    return { isLoading, data, error }
}
export default useGenres