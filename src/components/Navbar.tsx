import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/lambda-logo.png'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"


function Navbar() {
    return (
      <HStack padding='10px'>
        <Link to='/'>
        <Image src={logo} boxSize='55px' objectFit='cover' />
        </Link>
        <SearchInput/>
          <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar
