import React, {memo, useEffect} from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import {fetchReleasesByArtist} from "../model/services/fetchReleasesByArtist";
import {
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArtistDetailsReleases
} from "../model/selectors/getArtistDetailsSelector";

import type {Artist} from "@/shared/types/Artist";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ArtistsListItem} from "@/entities/ReleaseDetails";
import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";


interface ArtistProps {
    artist: Artist
}

export const ArtistDetails = memo((props: ArtistProps) => {
    const {artist} = props
    const {id, cover_image} = artist
    const dispatch = useAppDispatch()
    const releases = useSelector(getArtistDetailsReleases)
    const isLoading = useSelector(getArticleDetailsIsLoading)
    const error = useSelector(getArticleDetailsError)

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
                ? releases.map((release) => <ArtistsListItem key={release.id} release={release}/>)
                : error && <h6>{error}</h6>
            }
        </>
    )
})