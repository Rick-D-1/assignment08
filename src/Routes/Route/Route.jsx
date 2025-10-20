import { createBrowserRouter } from "react-router";
import Navbar from "../../Components/Header/Navbar";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import Apps from "../../Pages/Apps/Apps";
import Install from "../../Pages/Install/Install";
import AppDetails from "../../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('AppData.json'),
                path: "/",
                Component: Home,


            },
            {
                loader: () => fetch('AppData.json'),
                path: "/Apps",
                Component: Apps,

            },
            {
                path: "/Install",
                Component: Install,

            },
            {
                path: '/AppDetails/:id',
                Component: AppDetails,
                loader: () => fetch('./AppData.json')


            },
        ]
    },
]);