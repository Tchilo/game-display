import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import useGameQueryStore from "../store";

const SortSelector = () => {
    const sortOrder = useGameQueryStore(s => s.gamequery.sortOrder)
    const setOrder = useGameQueryStore(s => s.setOrder)
    
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
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Sort by: {currentSortOrder?.lable || 'Relevance'}</MenuButton>
            <MenuList >
                {orderType.map((order) => <MenuItem onClick={() => setOrder(order.value)} key={order.lable} value={order.lable}>{order.lable}</MenuItem>
                )}
            </MenuList>

        </Menu>
    )
}

export default SortSelector
