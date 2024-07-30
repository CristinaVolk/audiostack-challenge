import React, { memo } from "react"
import { Link } from "react-router-dom"

import { VStack } from "../Stack"
import classes from "./Error.module.scss"

import { getRouteHome } from "@/shared/consts/router/router"

interface ErrorProps {
    message?: string
}

export const Error = memo((props: ErrorProps) => {
    const { message } = props

    return (
        <section>
            <VStack gap="20" align="center" className={classes.Error}>
                <h2>Sorry, the error has occurred</h2>
                {message && <h2>message</h2>}
                <Link className={classes.refresh} to={getRouteHome()}>
                    <h2>Go to the home page</h2>
                </Link>
            </VStack>
        </section>
    )
})
