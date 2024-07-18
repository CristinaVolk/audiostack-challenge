import {createBrowserRouter} from "react-router-dom";

import {App} from "../../../ui/App";

import {getRouteHome} from "@/shared/consts/router";


export const router = createBrowserRouter([
    {
        path: getRouteHome(),
        Component: App,
    },
]);