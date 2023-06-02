import { createBrowserRouter } from "react-router-dom";
import MyComponent from "../Pages/MyComponents/MyComponents";
import Summary from "../Pages/Summary/Summary";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MyComponent></MyComponent>,
    },
    {
        path: '/shows/:id', loader: async ({ params }) => {
            return fetch(`https://api.tvmaze.com/shows/${params.id}`);
        }, element: <Summary></Summary>
    }
]);
export default router;