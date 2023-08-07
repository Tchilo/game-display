import { HStack, Image, List, Text, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImage from "../services/imageurl";

const GenresList = () => {
    const { isLoading, data, error } = useGenres()
    console.log(data);
    if (isLoading) return <Spinner />
    if(error) return null
    return (
        <>
            <List paddingY='5px'>
                {data.map(gen => <ListItem key={gen.id}>
                    <HStack>
                        <Image src={getCroppedImage(gen.image_background)} boxSize={'32px'} borderRadius={8}/>
                        <Text fontSize='15px'>{gen.name}</Text>

                    </HStack>
                </ListItem>)}
            </List>
        </>
    )
}

export default GenresList
