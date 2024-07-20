import React, {useEffect} from "react";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

import {fetchReleaseById} from "../model/services/fetchReleaseById";
import {getReleaseDetails, getReleaseDetailsIsLoading} from "../model/selectors/getReleaseDetailsPageSelector";

import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {ReleaseFullType} from "@/pages/ReleaseDetailsPage/model/types/ReleaseDetailsPageSchema";
import {Loading} from "@/shared/ui/Loading/Loading";
import {HStack} from "@/shared/ui/Stack";


export const ReleaseDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch()
    const release = useSelector(getReleaseDetails)
    const isLoading = useSelector(getReleaseDetailsIsLoading)

    useEffect(() => {
        dispatch(fetchReleaseById(id))
    }, []);

    if (!id) {
        return null;
    }

    if (isLoading) {
        return (
            <HStack max justify="center">
                <Loading />
            </HStack>
        )
    }

    return (
        <>
            <h1>ReleaseDetailsPage {id}</h1>
            {release &&
            <div>
                {release.title}
            </div>
            }
        </>
    )
}