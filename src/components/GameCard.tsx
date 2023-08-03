import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGameHook"
import PlatformIconList from "./PlatformIconList"

interface Prop {
    game: Game
}
const GameCard = ({ game }: Prop) => {
    return (
        <Card border={10} overflow='hidden'>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
            </CardBody>
        </Card>
    )
}

export default GameCard
