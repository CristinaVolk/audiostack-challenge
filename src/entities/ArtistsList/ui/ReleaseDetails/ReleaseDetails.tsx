import React, { memo } from "react"
import { NavLink } from "react-router-dom"

import classes from "./ReleaseDetail.module.scss"

import type { Release } from "@/shared/types/Release"
import { getRouteReleaseDetailsPage } from "@/shared/consts/router"

interface ReleaseDetailsProps {
    release: Release
}

export const ReleaseDetails = memo((props: ReleaseDetailsProps) => {
    const { release } = props
    const { title, year } = release

    return (
        <NavLink
            key={release.id}
            to={getRouteReleaseDetailsPage(String(release.id))}
        >
            <div className={classes.ReleaseDetails}>
                <h4>{title}</h4>
                <p>{year}</p>
            </div>
        </NavLink>
    )
})
