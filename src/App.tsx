import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import { Genres } from "./hooks/useGenres"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import { Platforms } from "./hooks/usePlatforms"

export interface GameQuery {
  genre: Genres | null;
  platform: Platforms | null
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenresList selectedGenre={gameQuery.genre} onSelect={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelect={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  )
}

export default App
