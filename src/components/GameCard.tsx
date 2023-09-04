import {Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGameHook"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/imageurl"

interface Prop {
    game: Game
}
const GameCard = ({ game }: Prop) => {
    return (
        <Card>
            <Image src={getCroppedImage(game.background_image)} />
            <CardBody>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard
