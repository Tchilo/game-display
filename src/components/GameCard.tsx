import {CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGameHook"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/imageurl"
import GameCardContainer from "./GameCardContainer"

interface Prop {
    game: Game
}
const GameCard = ({ game }: Prop) => {
    return (
        <GameCardContainer>

            <Image src={getCroppedImage(game.background_image)} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </GameCardContainer>
    )
}

export default GameCard
