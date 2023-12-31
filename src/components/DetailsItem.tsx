import { Box, Heading } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    term: string
    children:ReactNode | ReactNode[]
}
const DetailsItem = ({term,children}:Props) => {
  return (
      <Box my={5}>
          <Heading as='dt' fontSize='md' color='gray.600'>{term}</Heading>
          <dt>{children}</dt>
      </Box>
  )
}

export default DetailsItem