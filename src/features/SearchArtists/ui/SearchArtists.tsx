import React, { ChangeEvent, memo, useCallback } from "react"
import { useSelector } from "react-redux"

import { searchArtistsActions } from "../model/slices/searchArtistsSlice"
import { getSearchTerm } from "../model/selectors/getSearchArtistsSelector"
import classes from "./SearchArtists.module.scss"

import { classNames } from "@/shared/helpers/classNames"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { ReactComponent as SearchIcon } from "@/shared/assets/icons/search.svg"
import { HStack } from "@/shared/ui/Stack"

export const SearchArtists = memo(() => {
    const dispatch = useAppDispatch()
    const search = useSelector(getSearchTerm)

    const onSearchChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(searchArtistsActions.setSearch(event.target.value))
        },
        [dispatch]
    )

    return (
        <HStack
            align="center"
            max
            className={classNames(classes.SearchArtists, {}, [])}
        >
            <SearchIcon width={24} height={24} />
            <input
                className={classes.input}
                onChange={onSearchChange}
                value={search}
                placeholder="Search for an artist"
            />
        </HStack>
    )
})
