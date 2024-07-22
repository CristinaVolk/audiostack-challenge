import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import type { ArtistsListPageSchema } from "../types/ArtistsListPageSchema"

const initialState: ArtistsListPageSchema = {
    isLoading: false,
    error: "",
    artistsData: undefined,
    page: 1,
}

const artistsListSlice = createSlice({
    name: "artistsListSlice",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
    },
})

export const {
    reducer: artistsListPageReducer,
    actions: artistsListPageActions,
} = artistsListSlice
