import React, {memo} from "react";

import {ReleaseDetails} from "../ReleaseDetails/ReleaseDetails";
import classes from "./ArtistsListItem.module.scss";
import {useArtistsListItemHook} from "../../model/hooks/useArtistsListItemHook";

import type {Artist} from "@/shared/types/Artist";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import {Release} from "@/shared/types/Release";
import {Card} from "@/shared/ui/Card/Card";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Error} from '@/shared/ui/Error/Error'


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
                    {error && <Error message={error}/> }

                    {releases.length
                        &&  <>
                                <h3>Releases:</h3>
                                {releases.map((release: Release) =>
                                    (<ReleaseDetails key={release.id} release={release}/>))}
                            </>
                    }
                </VStack>
            </HStack>
        </Card>
    )
})