import React, { memo } from "react"

import { VStack } from "../Stack"
import classes from "./Error.module.scss"

interface ErrorProps {
    message?: string
}

export const Error = memo((props: ErrorProps) => {
    const { message } = props
    const onRefresh = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return (
        <section>
            <VStack gap="20" align="center" className={classes.Error}>
                <h2>Sorry, the error has occurred</h2>
                {message && <h2>message</h2>}
                <button className={classes.refresh} onClick={onRefresh}>
                    <h2>Refresh</h2>
                </button>
            </VStack>
        </section>
    )
})
