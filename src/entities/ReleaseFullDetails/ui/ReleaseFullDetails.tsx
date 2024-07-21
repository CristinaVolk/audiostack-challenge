import React from "react";
import {Link} from "react-router-dom";

import classes from "./ReleaseFullDetails.scss";

import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import {ReleaseFullType} from "@/shared/types/Release";
import {HStack, VStack} from "@/shared/ui/Stack";
import {Card} from "@/shared/ui/Card/Card";


interface ReleaseFullDetails {
    release: ReleaseFullType
}
export const ReleaseFullDetails = (props: ReleaseFullDetails) => {
    const {release} = props
    const {
        title,
        year,
        artists,
        country,
        genres,
        images,
        videos
    } = release

    const primaryImage = images?.find(image => image.type === 'primary')
    const secondaryImage = images?.find(image => image.type === 'secondary')

    const primaryImageProps = {
        src: primaryImage?.resource_url,
        alt: `release image ${primaryImage?.type}`,
        height: primaryImage?.height,
        className: classes.primary
    }

    const secondaryImageProps = {
        src: secondaryImage?.uri,
        alt: `release image ${secondaryImage?.type}`,
        height: secondaryImage?.height,
        className: classes.secondary
    }


    return (
        <VStack className={classes.ReleaseFullDetails} gap="20">
            <h2><b>{title}</b></h2>

            <HStack max gap="30">
                {primaryImage?.uri && <ImageComponent {...primaryImageProps} /> }
                {secondaryImage?.uri && <ImageComponent {...secondaryImageProps} /> }
            </HStack>

            <Card max border="smooth" cardPaddings="16">
                <VStack gap="15">
                    <p><b>Date released:</b> {year} </p>
                    <span><b>Country:</b> {country}</span>
                    <p><b>Artists:</b> {artists?.map(artist => <span key={artist.id}>{artist.title}</span>)}</p>
                    <p><b>Genres:</b> {genres?.map(genre => <span key={genre}>{genre}</span>)}</p>
                </VStack>
            </Card>


            <h2><b>Videos:</b></h2>
            {videos?.map(video => (
                <Card key={video.uri} border="smooth">
                    <VStack gap="10">
                        <h3><b>{video.title}</b></h3>
                        <Link target="_blank" to={video.uri}>{video.uri}</Link>
                        <p>{video.description}</p>
                    </VStack>

                </Card>

            ))}

        </VStack>
    )
}