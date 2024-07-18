import {AppRoutes} from "../types/router";

export const getRouteHome = () => '/'

export const AppRouterByPathPattern: Record<string, AppRoutes> = {
    [getRouteHome()]: AppRoutes.HOME,
};