import React from "react"
import { useLocation } from "react-router"

import { AppRouterByPathPattern } from "@/shared/consts/router/router"
import { VStack } from "@/shared/ui/Stack"

export const HomePage = () => {
    const { pathname } = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname]

    return (
        <VStack max gap="30" align="center">
            <h1>{pageTitle}</h1>
            <p>
                Hello, this is the Home Page. Here, something really exciting
                should be displayed about the Artists website. It is coming ...
                ;)
                <br />
                Please go to the Artists page to search the Artists and see
                their releases :)
            </p>
        </VStack>
    )
}
