import {createBrowserRouter} from "react-router-dom";

import {App} from "../../../ui/App";

import {ArtistsListPage} from "@/pages/ArtistsListPage";
import { AboutPage } from "@/pages/AboutPage";

import {getRouteAboutPage, getRouteHome, getRouteArtistsListPage} from "@/shared/consts/router";


export const router = createBrowserRouter([
    {
        path: getRouteHome(),
        Component: App,
        children: [
            {
                path: getRouteAboutPage(),
                Component: AboutPage,
            },
            {
                path: getRouteArtistsListPage(),
                Component: ArtistsListPage,
            }
        ]
    },
]);