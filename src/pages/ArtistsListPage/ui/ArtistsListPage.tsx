import React from 'react'
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

import {artistsListPageActions} from "../model/slices/artistsListSlice";
import {getArtistsListLimit, getArtistsListPage} from "../model/selectors/getArtistsListSelector";
import classes from "./ArtistsListPage.module.scss";
import {useArtistsListPage} from "../model/api/artistsListPageApi";
import {ParamsConfig} from "../model/types/ArtistsResponse";

import {AppRouterByPathPattern} from "@/shared/consts/router";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {getSearchTerm} from "@/features/SearchArtists";
import {Loading} from "@/shared/ui/Loading/Loading";
import {ArtistsList} from "@/entities/ArtistsList";
import {HStack, VStack} from "@/shared/ui/Stack";
import { ReactComponent as Arrow } from '@/shared/assets/icons/arrow-bottom.svg';
import {classNames} from "@/shared/helpers/classNames";


export const ArtistsListPage = () => {
    const {pathname} = useLocation()
    const pageTitle = AppRouterByPathPattern[pathname];
    const dispatch = useAppDispatch()
    const search = useSelector(getSearchTerm)
    const page = useSelector(getArtistsListPage)
    const limit = useSelector(getArtistsListLimit)

    const paramsConfig: ParamsConfig = {
        q: search,
        page,
        per_page: 5,
        type: 'artist'
    }

    const {
        isLoading,
        data: artistsData,
        error,
    }
        = useArtistsListPage(paramsConfig, {
            refetchOnMountOrArgChange: true,
            skip: false,
    })

    if (artistsData) {
        dispatch(artistsListPageActions.setLimit(artistsData?.pagination.pages))
    }

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
                error && ('data' in error)
                    ? <p>{JSON.stringify(error.data)}</p>
                    : artistsData &&
                    <>
                        <ArtistsList artists={artistsData.results} />
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