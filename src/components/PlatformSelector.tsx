import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform from "../hooks/usePlatforms"

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatform()
  console.log(data);
  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
      <MenuList>
        {isLoading && <Spinner/>}
        {data.map(plat => <MenuItem key={plat.id}>{plat.name}</MenuItem>)}
      </MenuList>

    </Menu>
  )
}

export default PlatformSelector
