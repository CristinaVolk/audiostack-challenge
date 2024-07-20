import React, {memo} from "react";

import classes from "./ArtistsList.module.scss";
import {ArtistsListItem} from "../ArtistsListItem/ArtistsListItem";

import {Artist} from "@/shared/types/Artist";
import {VStack} from "@/shared/ui/Stack";

interface ArtistsListProps {
    artists: Artist[]
}


export const ArtistsList = memo((props: ArtistsListProps) => {
    const {artists} = props

    return (
        <VStack className={classes.listContainer} gap="25">
            {
                artists.length && artists.map(artist => (
                    <ArtistsListItem key={artist.id} artist={artist} />
                ))
            }
        </VStack>
    )
})