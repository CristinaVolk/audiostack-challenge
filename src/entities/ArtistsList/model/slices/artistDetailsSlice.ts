import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ArtistReleasesSchema} from "../types/ArtistReleasesSchema";
import {fetchReleasesByArtist} from "../services/fetchReleasesByArtist";

import type {Release} from "@/shared/types/Release";


const initialState: ArtistReleasesSchema = {
    isLoading: false,
    error: '',
    releases: [],
}

const artistsReleasesSlice = createSlice({
    name: 'artistsReleasesSlice',
    initialState,
    reducers: {
        setReleases: (state, action: PayloadAction<Release[]>) => {
            state.releases = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReleasesByArtist.pending, (state) => {
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchReleasesByArtist.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            })
            .addCase(fetchReleasesByArtist.fulfilled, (state, action) => {
                state.error = '';
                state.releases = action.payload
                state.isLoading = false;
            })
    },
});

export const {
    reducer: artistsReleasesReducer,
    actions: artistsReleasesActions,
} = artistsReleasesSlice
