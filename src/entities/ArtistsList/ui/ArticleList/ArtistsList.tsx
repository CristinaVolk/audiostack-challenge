import React, {memo} from "react";

import classes from "./ArtistsList.module.scss";
import {ArtistsListItem} from "../ArtistsListItem/ArtistsListItem";

import {Artist} from "@/shared/types/Artist";

interface ArtistsListProps {
    artists: Artist[]
}


export const ArtistsList = memo((props: ArtistsListProps) => {
    const {artists} = props

    return (
        <div className={classes.listContainer}>
            {
                artists.length && artists.map(artist => (
                    <ArtistsListItem key={artist.id} artist={artist} />
                ))
            }
        </div>
    )
})