import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useSelector } from "react-redux"

import { fetchReleaseById } from "../model/services/fetchReleaseById"
import {
    getReleaseDetails,
    getReleaseDetailsError,
    getReleaseDetailsIsLoading,
} from "../model/selectors/getReleaseDetailsPageSelector"

import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { Loading } from "@/shared/ui/Loading/Loading"
import { HStack, VStack } from "@/shared/ui/Stack"
import { ReleaseFullDetails } from "@/entities/ReleaseFullDetails"
import { Error } from "@/shared/ui/Error/Error"
import { AppRoutes } from "@/shared/types/Router"
import { Link } from "react-router-dom"
import { getRouteArtistsListPage } from "@/shared/consts/router"

export const ReleaseDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const release = useSelector(getReleaseDetails)
    const isLoading = useSelector(getReleaseDetailsIsLoading)
    const error = useSelector(getReleaseDetailsError)

    useEffect(() => {
        dispatch(fetchReleaseById(id))
    }, [dispatch, id])

    const getContent = () => {
        return id ? (
            <>
                <Link to={getRouteArtistsListPage()}>Come back</Link>
                <h1>No Release Details found...</h1>
            </>
        ) : (
            <>
                <h1>{AppRoutes.RELEASE_DETAILS}:</h1>
                {error && <Error message={error} />}
                {release && <ReleaseFullDetails release={release} />}
            </>
        )
    }

    if (isLoading) {
        return (
            <HStack max justify="center">
                <Loading />
            </HStack>
        )
    }

    return (
        <VStack max gap="20">
            {getContent()}
        </VStack>
    )
}
