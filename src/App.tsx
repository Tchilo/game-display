import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import { Genres } from "./hooks/useGenres"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import { Platforms } from "./hooks/usePlatforms"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genre: Genres | null;
  platform: Platforms | null
  sortOrder: string
  serchText: string
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
        <Navbar onSearch={(serchText) => setGameQuery({ ...gameQuery, serchText })} />

      </GridItem>
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenresList selectedGenre={gameQuery.genre} onSelect={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box paddingLeft={2}>

          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelect={(platform) => setGameQuery({ ...gameQuery, platform })} />
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelect={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>

    </Grid>
  )
}

export default App
