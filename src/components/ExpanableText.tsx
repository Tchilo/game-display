import { Box, Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface Props {
    children: string
}

const ExpanableText = ({ children }: Props) => {

    const [show, setShow] = useState(false);
    if (!children) return null
    return (
        <Box>
            <Text>{children.length <= 300 ? children : show ? children : children.substring(0, 300) + '...'}
            </Text>
            <Button
                mt={2}
                size='xs'
                display='inline'
                colorScheme="yellow"
                fontWeight='bold'
                onClick={() => setShow(!show)}
            >{show ? 'Show Less' : 'Read More'}</Button>
        </Box>

    )
}

export default ExpanableText
