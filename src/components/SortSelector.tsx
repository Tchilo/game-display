import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

// interface Props {
//   onSelect: (platform: Platforms) => void;
//   selectedPlatform: Platforms | null;
// }
const SortSelector = () => {

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>Sort by: Relevance</MenuButton>
          <MenuList>
              <MenuItem>Relevance</MenuItem>
              <MenuItem>Date added</MenuItem>
              <MenuItem>Name</MenuItem>
              <MenuItem>Relase date</MenuItem>
              <MenuItem>Popularity</MenuItem>
              <MenuItem>Average rating</MenuItem>
      </MenuList>

    </Menu>
  )
}

export default SortSelector
