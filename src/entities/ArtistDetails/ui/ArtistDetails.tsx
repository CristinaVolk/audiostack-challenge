import React, {useEffect} from "react";
import {useSelector} from "react-redux";

import {useAppDispatch} from "@/shared/hooks/useAppDispatch";

import {fetchReleasesByArtist} from "../model/services/fetchReleasesByArtist";
import {getArtistDetailsReleases} from "../model/selectors/getArtistDetailsSelector";
import {Artist} from "../model/types/Artist";


interface ArtistProps {
    artist: Artist
}

export const ArtistDetails = (props: ArtistProps) => {
    const {artist} = props
    const {id, resource_url} = artist
    const dispatch = useAppDispatch()
    const releases = useSelector(getArtistDetailsReleases)

    useEffect(() => {
        dispatch(fetchReleasesByArtist(id))
    }, [dispatch, id]);

    return (
        <>
            <img />
            <h1>{artist.title}</h1>
            {releases.length
                ? releases.map((release) => <p>{release.title}</p>)
                : null
            }
        </>
    )
}