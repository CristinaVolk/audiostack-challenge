import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import type {ThunkConfig, ThunkExtraArg} from "@/app/providers/StoreProvider";
import {$releases, $search} from "@/shared/api/endpoints";
import {ReleaseFullType} from "@/pages/ReleaseDetailsPage/model/types/ReleaseDetailsPageSchema";
import {AUTH_KEY, AUTH_SECRET} from "@/shared/api/config";


export const fetchReleaseById = createAsyncThunk<
    ReleaseFullType,
    string,
    ThunkConfig<string>
>(
    'artists/fetchArtists',
    async (releaseId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response: AxiosResponse<ReleaseFullType> =
                await (extra as ThunkExtraArg).api
                    .get(`${$releases}/${releaseId}`);

            return response && response.data ? response.data : rejectWithValue("Error while fetching the data");
        } catch (e) {
            return rejectWithValue("Error while making request");
        }
    }
);