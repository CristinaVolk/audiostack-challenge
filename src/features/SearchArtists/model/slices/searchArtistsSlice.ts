import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { SearchArtistsSchema } from "../types/SearchArtistsSchema"

const initialState: SearchArtistsSchema = {
    search: "",
}

const searchArtistsSlice = createSlice({
    name: "searchReleasesSlice",
    initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload
        },
    },
})

export const { reducer: searchArtistsReducer, actions: searchArtistsActions } =
    searchArtistsSlice
