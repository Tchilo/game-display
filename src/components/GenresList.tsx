import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres"
import getCroppedImage from "../services/imageurl";

interface Props {
    onSelect: (genre: Genres) => void
    selectedGenreId: number|undefined
}

const GenresList = ({ onSelect, selectedGenreId }: Props) => {
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
                        <Button whiteSpace='normal' textAlign='left' fontWeight={gen.id === selectedGenreId ? 'bold' : ''} variant='link' fontSize='15px'
                            onClick={() => onSelect(gen)}
                        >{gen.name}</Button>

                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenresList
