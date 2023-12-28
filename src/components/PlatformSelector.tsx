import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatforms"
import useGameQueryStore from "../store"


const PlatformSelector = () => {
  const { data: platforms } = usePlatform()
  const platformId = useGameQueryStore(s => s.gamequery.platformId)
  const platform = platforms.results.find((p) => p.id === platformId)
  
  const setPlatform = useGameQueryStore(s => s.setPlatform)
  const { data, error, isLoading } = usePlatform()

  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{platform?.name || 'Platforms'}</MenuButton>
      <MenuList>
        {isLoading && <Spinner />}
        {data?.results.map(plat => <MenuItem onClick={() => setPlatform(plat.id)} key={plat.id}>{plat.name}</MenuItem>)}
      </MenuList>

    </Menu>
  )
}

export default PlatformSelector
