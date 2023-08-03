import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGameHook"

interface Prop{
    game:Game
}
const GameCard = ({game}:Prop) => {
  return (
    <Card border={10} overflow='hidden'>
          <Image src={game.background_image} />
          <CardBody>
              <Heading fontSize='2xl'>{ game.name}</Heading>
          </CardBody>
    </Card>
  )
}

export default GameCard
