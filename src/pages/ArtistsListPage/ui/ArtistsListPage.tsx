import React, {useCallback, useEffect} from 'react'
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import {artistsListPageActions} from "../model/slices/artistsListSlice";
import {
    getArtistsList,
    getArtistsListError,
    getArtistsListIsLoading, getArtistsListLimit,
    getArtistsListPage
} from "../model/selectors/getArtistsListSelector";
import {fetchArtists} from "../model/services/fetchArtists";

import {AppRouterByPathPattern} from "@/shared/consts/router";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {getSearchTerm} from "@/features/SearchArtists";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ArtistsList} from "@/entities/ArtistsList";
import {HStack, VStack} from "@/shared/ui/Stack";
import {useDebounce} from "@/shared/hooks/useDebounce";
import { ReactComponent as Arrow } from '@/shared/assets/icons/arrow-bottom.svg';
import {classNames} from "@/shared/helpers/classNames";
import classes from "./ArtistsListPage.module.scss";


export const ArtistsListPage = () => {
    const {pathname} = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname];
    const dispatch = useAppDispatch()
    const artists = useSelector(getArtistsList)
    const search = useSelector(getSearchTerm)
    const isLoading = useSelector(getArtistsListIsLoading)
    const error = useSelector(getArtistsListError)
    const page = useSelector(getArtistsListPage)
    const limit = useSelector(getArtistsListLimit)

    const fetchData = useCallback(() => {
        dispatch(fetchArtists());
    }, [dispatch]);

    const debouncedFetch = useDebounce(fetchData, 1000)

    useEffect(() => {
        debouncedFetch()
    }, [debouncedFetch, search, page])

    const isUnderLimit = page <= 1
    const isOverLimit = page >= limit

    const paginateRight = () => {
        dispatch(artistsListPageActions.setPage(page + 1))
    }

    const paginateLeft = () => {
        dispatch(artistsListPageActions.setPage(page - 1))
    }


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
            {
                error
                    ? <p>{error}</p>
                    : artists.length &&
                    <>
                        <ArtistsList artists={artists} />
                        <HStack className={classes.pagination} align="center">
                            <Arrow
                                onClick={paginateLeft}
                                className={classNames(classes.arrowLeft, {[classes.hidden]: isUnderLimit}, [])}
                            />
                            <span>{page}</span>
                            <Arrow
                                onClick={paginateRight}
                                className={classNames(classes.arrowRight, {[classes.hidden]: isOverLimit}, [])}
                            />
                        </HStack>
                    </>
            }
        </VStack>
    )
}