import { SideBarItemType } from "../types/sidebar"
import {
    getRouteAboutPage,
    getRouteArtistsListPage,
    getRouteHome,
} from "@/shared/consts/router/router"

export const useSideBarItems = () => {
    const sideBarItemsList: Array<SideBarItemType> = [
        {
            path: getRouteHome(),
            text: "Home",
        },
        {
            path: getRouteAboutPage(),
            text: "About",
        },
        {
            path: getRouteArtistsListPage(),
            text: "Artists",
        },
    ]

    return sideBarItemsList
}
