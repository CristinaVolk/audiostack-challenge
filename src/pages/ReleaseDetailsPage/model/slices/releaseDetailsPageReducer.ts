import { createSlice } from "@reduxjs/toolkit"

import { fetchReleaseById } from "../services/fetchReleaseById"
import { ReleaseDetailsPageSchema } from "../types/ReleaseDetailsPageSchema"

const initialState: ReleaseDetailsPageSchema = {
    isLoading: false,
    error: "",
    release: undefined,
}

const releaseDetailsPageSlice = createSlice({
    name: "releaseDetailsPageSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReleaseById.pending, (state) => {
                state.error = ""
                state.isLoading = true
            })
            .addCase(fetchReleaseById.rejected, (state, action) => {
                state.error = action.payload as string
                state.isLoading = false
            })
            .addCase(fetchReleaseById.fulfilled, (state, action) => {
                state.error = ""
                state.release = action.payload
                state.isLoading = false
            })
    },
})

export const { reducer: releaseDetailsPageReducer } = releaseDetailsPageSlice
