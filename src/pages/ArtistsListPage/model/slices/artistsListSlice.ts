import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import type {ArtistsListSchema} from "../types/ArtistsListSchema";
import {fetchArtists} from "../services/fetchArtists";


const initialState: ArtistsListSchema = {
    isLoading: false,
    error: '',
    artists: [],
    page: 0,
    limit: 5,
}

const artistsListSlice = createSlice({
    name: 'artistsListSlice',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtists.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchArtists.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchArtists.fulfilled, (state, action) => {
                state.error = '';
                state.artists = action.payload
                state.isLoading = false;
            })
    },
});

export const {
    reducer: artistsListReducer,
    actions: artistsListActions,
} = artistsListSlice
