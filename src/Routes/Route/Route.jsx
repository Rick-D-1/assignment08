import { createBrowserRouter } from "react-router";
import Navbar from "../../Components/Header/Navbar";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";
import Apps from "../../Pages/Apps/Apps";
import Install from "../../Pages/Install/Install";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,

            },
            {
                path: "/Apps",
                Component: Apps,

            },
            {
                path: "/Install",
                Component: Install,

            },
        ]
    },
]);