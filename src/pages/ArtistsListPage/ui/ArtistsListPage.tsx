import React, {useEffect} from 'react'
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import {artistsListActions} from "../model/slices/artistsListSlice";
import {getArtistsList, getArtistsListError, getArtistsListIsLoading} from "../model/selectors/getArtistsListSelector";
import {fetchArtists} from "../model/services/fetchArtists";

import {AppRouterByPathPattern} from "@/shared/consts/router";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {getSearchTerm} from "@/features/SearchArtists";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ArtistsList} from "@/entities/ArtistsList";


export const ArtistsListPage = () => {
    const {pathname} = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname];
    const dispatch = useAppDispatch()
    const artists = useSelector(getArtistsList)
    const search = useSelector(getSearchTerm)
    const isLoading = useSelector(getArtistsListIsLoading)
    const error = useSelector(getArtistsListError)

    useEffect(() => {
        dispatch(fetchArtists());
        dispatch(artistsListActions.setPage(1))
    }, [dispatch, search]);


    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <h1>{pageTitle}</h1>
            {artists.length
                ? <ArtistsList artists={artists} />
                : error && <p>{error}</p>
            }
        </>
    )
}