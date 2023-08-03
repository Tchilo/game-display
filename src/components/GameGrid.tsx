import { Text } from "@chakra-ui/react";
import useGameHook from "../hooks/useGameHook";


const GameGrid = () => {
    const {games,error} = useGameHook()
    return (
        <>
            {error && <Text>{ error}</Text>}
        <ul>
            {games.map((game) => <li key={game.id}>{ game.name}</li>)}
        </ul>
        </>
    )
}

export default GameGrid
