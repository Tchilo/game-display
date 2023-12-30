import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorElement = () => {
    const error = useRouteError()
    return (

        <Box padding={10}>
            <Heading>Ooops...</Heading>
            <Text>
                {isRouteErrorResponse(error) ? 'Invalid Route' : 'unexpected error'}
            </Text>
        </Box>
    )
}

export default ErrorElement
