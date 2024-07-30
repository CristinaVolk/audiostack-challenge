import { AxiosError, AxiosResponse } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

import type { ThunkConfig, ThunkExtraArg } from "@/app/providers/StoreProvider"
import { ReleaseFullType } from "@/shared/types/Release"
import { $releases } from "@/shared/consts/api/endpoints"
import { statusCodes } from "@/shared/consts/api/errors"

export const fetchReleaseById = createAsyncThunk<
    ReleaseFullType,
    string,
    ThunkConfig<string>
>("artists/fetchArtists", async (releaseId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
        const response: AxiosResponse<ReleaseFullType> = await (
            extra as ThunkExtraArg
        ).api.get(`${$releases}/${releaseId}`)

        if (response.status === statusCodes.NOT_FOUND) {
            return rejectWithValue("Resource not found")
        }

        if (response.status === statusCodes.INTERNAL_SERVER) {
            return rejectWithValue("Internal server error")
        }

        return response.data
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            if (!error.response || error.code === AxiosError.ERR_NETWORK) {
                return rejectWithValue("Can not reach server")
            }
        }

        return rejectWithValue("Error while making request")
    }
})
