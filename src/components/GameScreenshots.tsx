import { Image, SimpleGrid, Spinner } from "@chakra-ui/react"
import useScreenshots from "../hooks/useScreenshots"

interface Props {
    id:number
}

const GameScreenshots = ({ id }: Props) => {
    const { data: screenshots,isLoading,error } = useScreenshots(id)
    if (isLoading) return <Spinner />
    if (error || !screenshots) throw error
  return (
    <SimpleGrid spacing={2} columns={{base:1,md:2}}>
          {screenshots?.results.map(i => <Image key={i.id} src={ i.image} />)}
    </SimpleGrid>
  )
}

export default GameScreenshots
