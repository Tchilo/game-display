import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import GameDetails from "../components/GameDetails";
import Homepage from "../pages/Homepage";
import ErrorElement from "../components/ErrorPage";

const route = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        errorElement: <ErrorElement />,
        children: [
            { index: true, element: <Homepage /> },
            { path: 'games/:id', element: <GameDetails /> }
        ]
    }
])

export default route