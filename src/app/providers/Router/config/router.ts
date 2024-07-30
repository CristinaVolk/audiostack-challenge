import { createBrowserRouter } from "react-router-dom"

import { App } from "../../../ui/App"

import { ArtistsListPage } from "@/pages/ArtistsListPage"
import { AboutPage } from "@/pages/AboutPage"
import { ReleaseDetailsPage } from "@/pages/ReleaseDetailsPage"
import { HomePage } from "@/pages/HomePage"
import {
    getRouteAboutPage,
    getRouteHome,
    getRouteArtistsListPage,
    getRouteReleaseDetailsPage,
} from "@/shared/consts/router/router"

export const router = createBrowserRouter([
    {
        path: getRouteHome(),
        Component: App,
        children: [
            {
                path: getRouteHome(),
                Component: HomePage,
            },
            {
                path: getRouteAboutPage(),
                Component: AboutPage,
            },
            {
                path: getRouteArtistsListPage(),
                Component: ArtistsListPage,
            },
            {
                path: getRouteReleaseDetailsPage(":id"),
                Component: ReleaseDetailsPage,
            },
        ],
    },
])
