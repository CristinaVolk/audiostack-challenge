import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {ArtistsListPageSchema} from "../types/ArtistsListPageSchema";
import {fetchArtists} from "../services/fetchArtists";


const initialState: ArtistsListPageSchema = {
    isLoading: false,
    error: '',
    artistsData: undefined,
    page: 1,
    limit: 5,
}

const artistsListSlice = createSlice({
    name: 'artistsListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtists.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(fetchArtists.rejected, (state, action) => {
                state.error = action.payload as string
                state.isLoading = false
            })
            .addCase(fetchArtists.fulfilled, (state, action) => {
                state.error = ''
                state.artistsData = action.payload
                state.isLoading = false
            })
    },
});

export const {
    reducer: artistsListPageReducer,
    actions: artistsListPageActions,
} = artistsListSlice
