import React from "react";

import classes from "./ReleaseFullDetails.scss";

import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import {ReleaseFullType} from "@/shared/types/Release";
import {HStack, VStack} from "@/shared/ui/Stack";


interface ReleaseFullDetails {
    release: ReleaseFullType
}
export const ReleaseFullDetails = (props: ReleaseFullDetails) => {
    const {release} = props
    console.log(release.images)
    const {title, year, artists, released, country, genres, images} = release

    const primaryImage = release?.images?.find(image => image.type === 'primary')
    const secondaryImage = release?.images?.find(image => image.type === 'secondary')

    const primaryImageProps = {
        src: primaryImage?.uri,
        weight: primaryImage?.width,
        height: primaryImage?.height,
        className: classes.primary
    }

    const secondaryImageProps = {
        src: secondaryImage?.uri,
        weight: secondaryImage?.width,
        height: secondaryImage?.height,
        className: classes.secondary
    }


    return (
        <VStack className={classes.ReleaseFullDetails}>
            <h1>{title}</h1>

            <HStack max gap='30'>
                {primaryImage && <ImageComponent {...primaryImageProps} /> }
                {secondaryImage && <ImageComponent {...secondaryImageProps} /> }
            </HStack>

            <p><b>Date released:</b> {year} </p>
            <span><b>Country:</b> {country}</span>
            <p><b>Artists:</b> {artists?.map(artist => <span key={artist.id}>{artist.title}</span>)}</p>
            <p><b>Genres:</b> {genres?.map(genre => <span key={genre}>{genre}</span>)}</p>
        </VStack>
    )
}