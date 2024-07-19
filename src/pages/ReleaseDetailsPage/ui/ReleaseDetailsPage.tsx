import React from "react";
import {useParams} from "react-router";

export const ReleaseDetailsPage = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return null;
    }

    return (
        <>
            <h1>ReleaseDetailsPage {id}</h1>
        </>
    )
}