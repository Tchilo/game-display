import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../entities/Platform"
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from 'react-icons/fa'
import { SiNintendo } from 'react-icons/si'
import { MdPhone } from 'react-icons/md'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons"


interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {
    const iconList: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhone,
        web: BsGlobe,
        android: FaAndroid
    }
    return (
        <HStack margin={1}>
            {platforms.map((platform) => <Icon key={platform.id} as={iconList[platform.slug]} color='gray.500' />)}
        </HStack>
    )
}

export default PlatformIconList
