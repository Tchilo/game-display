import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImage from "../services/imageurl";
import useGameQueryStore from "../store";


const GenresList = () => {
    const genreId = useGameQueryStore(s => s.gamequery.genreId)
    const setGenre = useGameQueryStore(s => s.setGenre)
    const { data, error, isLoading } = useGenres()
    if (isLoading) return <Spinner />
    if (error) return null
    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List paddingY='5px'>
                {data?.results.map(gen => <ListItem marginY={2} key={gen.id}>
                    <HStack>
                        <Image objectFit='cover' src={getCroppedImage(gen.image_background)} boxSize={'32px'} borderRadius={8} />
                        <Button whiteSpace='normal' textAlign='left' fontWeight={gen.id === genreId ? 'bold' : ''} variant='link' fontSize='15px'
                            onClick={() => setGenre(gen.id)}
                        >{gen.name}</Button>

                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenresList
