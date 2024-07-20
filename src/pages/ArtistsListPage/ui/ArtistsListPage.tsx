import React, {useCallback, useEffect} from 'react'
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import {artistsListPageActions} from "../model/slices/artistsListSlice";
import {getArtistsList, getArtistsListError, getArtistsListIsLoading} from "../model/selectors/getArtistsListSelector";
import {fetchArtists} from "../model/services/fetchArtists";

import {AppRouterByPathPattern} from "@/shared/consts/router";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {getSearchTerm} from "@/features/SearchArtists";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ArtistsList} from "@/entities/ArtistsList";
import {HStack, VStack} from "@/shared/ui/Stack";
import {useDebounce} from "@/shared/hooks/useDebounce";


export const ArtistsListPage = () => {
    const {pathname} = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname];
    const dispatch = useAppDispatch()
    const artists = useSelector(getArtistsList)
    const search = useSelector(getSearchTerm)
    const isLoading = useSelector(getArtistsListIsLoading)
    const error = useSelector(getArtistsListError)

    const fetchData = useCallback(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    const debouncedFetch = useDebounce(fetchData, 1000)

    useEffect(() => {
        // @ts-ignore
        debouncedFetch()
    }, [debouncedFetch, search])


    if (isLoading) {
        return (
            <HStack max justify="center">
                <Loading />
            </HStack>
        )
    }

    return (
        <VStack align="center" gap="30">
            <h1>{pageTitle}</h1>
            {artists.length
                ? <ArtistsList artists={artists} />
                : error && <p>{error}</p>
            }
        </VStack>
    )
}