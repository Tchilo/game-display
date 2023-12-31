import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import Game from "../entities/Game"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/imageurl"
import Emoji from "./Emoji"
import { Link } from "react-router-dom"

interface Prop {
    game: Game
}
const GameCard = ({ game }: Prop) => {
    return (
        <Card overflow='hidden'>
            <Link to={`/games/${game.slug}`}>
                <Image src={getCroppedImage(game.background_image)} />
                <CardBody>
                    <HStack marginBottom={3} justifyContent={'space-between'}>
                        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top} /> </Heading>
                </CardBody>
            </Link>
        </Card>
    )
}

export default GameCard
