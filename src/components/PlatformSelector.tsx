import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatform, { Platforms } from "../hooks/usePlatforms"

interface Props {
  onSelect: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}
const PlatformSelector = ({ onSelect,selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform()

  if (error) return null
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{ selectedPlatform?.name||'Platforms'}</MenuButton>
      <MenuList>
        {isLoading && <Spinner />}
        {data.map(plat => <MenuItem onClick={() => onSelect(plat)} key={plat.id}>{plat.name}</MenuItem>)}
      </MenuList>

    </Menu>
  )
}

export default PlatformSelector