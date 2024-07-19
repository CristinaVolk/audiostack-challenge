import React, {ChangeEvent} from 'react';
import {useSelector} from "react-redux";

import {searchArtistsActions} from "../model/slices/searchArtistsSlice";
import {getSearchTerm} from "../model/selectors/getSearchArtistsSelector";
import classes from "./SearchArtists.module.scss";

import {classNames} from "@/shared/helpers/classNames";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch";
import {ImageComponent} from "@/shared/ui/ImageComponent/ImageComponent";

const iconPath = 'assets/icons/search-icon-white.png'

export const SearchArtists = () => {
    const dispatch = useAppDispatch()
    const search = useSelector(getSearchTerm)

    function onSearchChange(event: ChangeEvent<HTMLInputElement>) {
        dispatch(searchArtistsActions.setSearch(event.target.value))
    }

    return (
        <div className={classNames(classes.SearchArtists, {} , [])}>
            <ImageComponent width={24} height={24} src={iconPath}/>
            <input className={classes.input} onChange={onSearchChange} value={search}/>
        </div>
    )
}