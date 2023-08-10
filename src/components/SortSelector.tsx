import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
interface Props {
    onSelect: (sortOrder: string) => void;
      sortOrder: string;
}
const SortSelector = ({ onSelect, sortOrder }: Props) => {
    const orderType = [
        { value: '', lable: 'Relevance' },
        { value: '-added', lable: 'Date added' },
        { value: 'name', lable: 'Name' },
        { value: '-released', lable: 'Relase date' },
        { value: '-metacritic', lable: 'Popularity' },
        { value: '-rating', lable: 'Average rating' }]
    
    const currentSortOrder = orderType.find((order) => order.value === sortOrder)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Sort by: {currentSortOrder?.lable||'Relevance'}</MenuButton>
            <MenuList >
                {orderType.map((order) => <MenuItem onClick={() => onSelect(order.value)} key={order.lable} value={order.lable}>{order.lable}</MenuItem>
                )}
            </MenuList>

        </Menu>
    )
}

export default SortSelector
