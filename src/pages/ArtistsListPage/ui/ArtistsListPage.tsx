import React, {useEffect} from 'react'
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import {getArtistsList, getArtistsListIsLoading} from "../model/selectors/getArtistsListSelector";
import {fetchArtists} from "../model/services/fetchArtists";
import classes from './ArtistsListPage.module.scss'

import {AppRouterByPathPattern} from "@/shared/consts/router";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {getSearchTerm} from "@/features/SearchArtists";
import {artistsListActions} from "@/pages/ArtistsListPage/model/slices/artistsListSlice";
import {ArtistDetails} from "@/entities/ArtistDetails/ui/ArtistDetails";


export const ArtistsListPage = () => {
    const {pathname} = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname];
    const dispatch = useAppDispatch()
    const artists = useSelector(getArtistsList)
    const search = useSelector(getSearchTerm)
    const isLoading = useSelector(getArtistsListIsLoading)

    useEffect(() => {
        dispatch(fetchArtists());
        dispatch(artistsListActions.setPage(1))
    }, [dispatch, search]);


    if (isLoading) {
        return (<h1>Loading ...</h1>)
    }

    return (
        <>
            <h1>{pageTitle}</h1>
            <div className={classes.listContainer}>
                {
                    artists.length && artists.map(artist => (
                        <ArtistDetails key={artist.id} artist={artist} />
                    ))
                }
            </div>
        </>
    )
}