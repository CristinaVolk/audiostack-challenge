import { AppRoutes } from "../../types/Router"

export const getRouteHome = () => "/"
export const getRouteArtistsListPage = () => "/artists"
export const getRouteAboutPage = () => "/about"
export const getRouteReleaseDetailsPage = (id: string) => `/releases/${id}`

export const AppRouterByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteArtistsListPage()]: AppRoutes.ARTISTS,
    [getRouteAboutPage()]: AppRoutes.ABOUT,
    [getRouteReleaseDetailsPage(":id")]: AppRoutes.RELEASE_DETAILS,
}
