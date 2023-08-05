import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGameHook"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/imageurl"

interface Prop {
    game: Game
}
const GameCard = ({ game }: Prop) => {
    return (
        <Card border={10} overflow='hidden'>
            <Image src={getCroppedImage(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard
