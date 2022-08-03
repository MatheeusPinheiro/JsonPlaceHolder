import { useRoutes } from "react-router-dom"
import { BigPhoto } from "../pages/BigPhoto"
import { Home } from "../pages/Home"
import { Photos } from "../pages/Photos"


export const MainRoutes = () =>{

    return useRoutes([
        {path: '/', element: <Home/>},
        {path: '/album/:id', element: <Photos/>},
        {path: '/big/:id', element: <BigPhoto />},
    ])
}