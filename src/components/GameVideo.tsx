import { AspectRatio, Spinner } from "@chakra-ui/react"
import useMovie from "../hooks/useMovie"

interface Props {
    id: number
}
const GameVideo = ({ id }: Props) => {
    const { data: trailer, isLoading, error } = useMovie(id)

    if (isLoading) return <Spinner />
    if (error || !trailer) throw error
    const movie = trailer?.results[0]

    return movie ? <video src={movie.data[480]}
        poster={movie.preview}
        controls
    />

     : null
}

export default GameVideo
