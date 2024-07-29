import React, { ChangeEvent, memo, useCallback, useEffect, useState } from "react"

import { searchArtistsActions } from "../model/slices/searchArtistsSlice"
import classes from "./SearchArtists.module.scss"

import { classNames } from "@/shared/helpers/classNames"
import { useAppDispatch } from "@/shared/hooks/useAppDispatch"
import { ReactComponent as SearchIcon } from "@/shared/assets/icons/search.svg"
import { HStack } from "@/shared/ui/Stack"
import { useDebounce } from "../model/hooks/useDebounceSearch"

const DELAY = 800

export const SearchArtists = memo(() => {
    const dispatch = useAppDispatch()
    const [searchValue, setSearchValue] = useState('')
    const debouncedSearchTerm = useDebounce(searchValue, DELAY);

    const onSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }, [])

    useEffect(() => {
        dispatch(searchArtistsActions.setSearch(debouncedSearchTerm))
    }, [searchValue, debouncedSearchTerm, dispatch])

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
                value={searchValue}
                placeholder="Search for an artist"
            />
        </HStack>
    )
})
