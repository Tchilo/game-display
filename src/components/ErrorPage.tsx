import { Box, Heading, Text } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Navbar from "./Navbar"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <>
            <Navbar />
            <Box padding={10}>
                <Heading>Ooops...</Heading>
                <Text>
                    {isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error occurred'}
                </Text>
            </Box>
        </>

    )
}

export default ErrorPage
