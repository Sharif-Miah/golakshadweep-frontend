import { createBrowserRouter } from "react-router-dom";
import AboutLaskshadweep from "../Component/AboutLaskshadweep/AboutLaskshadweep";
import AboutUs from "../Component/AboutUs/AboutUs";
import FindReservarions from "../Component/FindReservarions/FindReservarions";
import Gol from "../Component/Gol/Gol";
import Home from "../Component/Home/Home";
import Packages from "../Component/Packages/Packages";
import Support from "../Component/Support/Support";
import Main from "../layout/Main";

 const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/findreservations',
                element: <FindReservarions/>
            },
            {
                path: '/Packages',
                element: <Packages/>
            },
            {
                path: '/aboutlakshadweep',
                element: <AboutLaskshadweep/>
            },
            {
                path: '/aboutus',
                element: <AboutUs/>
            },
            {
                path: '/gol',
                element: <Gol/>
            },
            {
                path: '/support',
                element: <Support/>
            }
        ]
    }
 ])

 export default routes;