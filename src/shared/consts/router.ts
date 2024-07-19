import {AppRoutes} from "../types/router";

export const getRouteHome = () => '/'
export const getRouteArtistsListPage = () => '/artists'
export const getRouteAboutPage = () => '/about'


export const AppRouterByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
    [getRouteArtistsListPage()]: AppRoutes.ARTISTS,
    [getRouteAboutPage()]: AppRoutes.ABOUT
};