import React, {memo} from "react";

import {ReleaseDetails} from "../ReleaseDetails/ReleaseDetails";
import classes from "./ArtistsListItem.module.scss";

import type {Artist} from "@/shared/types/Artist";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import {Release} from "@/shared/types/Release";
import {Card} from "@/shared/ui/Card/Card";
import {HStack, VStack} from "@/shared/ui/Stack";

import {useArtistsListItemHook} from "@/entities/ArtistsList/model/hooks/useArtistsListItemHook";


interface ArtistsListItemProps {
    artist: Artist
}


export const ArtistsListItem = memo((props: ArtistsListItemProps) => {
    const {artist} = props
    const {id, cover_image} = artist
    const {isLoading, error, releases} = useArtistsListItemHook(id)


    if (isLoading) {
        return (
            <HStack max justify="center">
                <Loading />
            </HStack>
        )
    }

    return (
        <Card
            max
            cardPaddings="16"
            border="smooth"
            className={classes.ArtistsListItem}
        >
            <HStack gap="25">
                <VStack  gap="10" className={classes.imgContainer}>
                    <ImageComponent
                        src={cover_image}
                        alt="artist image"
                    />
                    <h3>{artist.title}</h3>
                </VStack>

                <VStack gap="10">
                    <h3>Releases:</h3>

                    {releases.length
                        ? releases
                            .map((release: Release) => <ReleaseDetails key={release.id} release={release}/>)
                        : error && <h6>{error}</h6>
                    }
                </VStack>
            </HStack>
        </Card>
    )
})