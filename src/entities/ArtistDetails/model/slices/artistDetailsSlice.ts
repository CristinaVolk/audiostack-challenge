import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {ArtistDetailsSchema, Release} from "@/entities/ArtistDetails/model/types/ArtistDetailsSchema";
import {fetchReleasesByArtist} from "@/entities/ArtistDetails/model/services/fetchReleasesByArtist";


const initialState: ArtistDetailsSchema = {
    isLoading: false,
    error: '',
    releases: [],
}

const artistsDetailsSlice = createSlice({
    name: 'artistsDetailsSlice',
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
    reducer: artistsDetailsReducer,
    actions: artistsDetailsActions,
} = artistsDetailsSlice
