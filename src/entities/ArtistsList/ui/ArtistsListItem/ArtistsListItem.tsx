import React, {memo, useEffect} from "react";
import {useSelector} from "react-redux";

import {ReleaseDetails} from "../ReleaseDetails/ReleaseDetails";
import {fetchReleasesByArtist} from "../../model/services/fetchReleasesByArtist";
import {
    getArticleReleasesError,
    getArticleReleasesIsLoading,
    getArtistReleases
} from "../../model/selectors/getArtistReleasesSelector";

import type {Artist} from "@/shared/types/Artist";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";
import {Release} from "@/shared/types/Release";

interface ArtistsListItemProps {
    artist: Artist
}


export const ArtistsListItem = memo((props: ArtistsListItemProps) => {
    const {artist} = props
    const {id, cover_image} = artist
    const dispatch = useAppDispatch()
    const releases = useSelector(getArtistReleases)
    const isLoading = useSelector(getArticleReleasesIsLoading)
    const error = useSelector(getArticleReleasesError)

    useEffect(() => {
        dispatch(fetchReleasesByArtist(id))
    }, [dispatch, id]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <ImageComponent src={cover_image} alt="artist image" height={'100px'} width={'100px'}/>
            <h1>{artist.title}</h1>

            {releases.length
                ? releases.map((release: Release) => <ReleaseDetails key={release.id} release={release}/>)
                : error && <h6>{error}</h6>
            }
        </>
    )
})