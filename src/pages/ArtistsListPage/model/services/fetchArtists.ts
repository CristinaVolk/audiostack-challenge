import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import {Artist, ArtistsResponse} from "../types/ArtistsResponse";

import {StateSchema, ThunkConfig, ThunkExtraArg} from "@/app/providers/StoreProvider";
import {getSearchTerm} from "@/features/SearchArtists/model/selectors/getSearchArtistsSelector";
import {$search} from "@/shared/api/endpoints";
import {AUTH_KEY, AUTH_SECRET} from "@/shared/api/config";


export const fetchArtists = createAsyncThunk<
    Artist[],
    void,
    ThunkConfig<string>
>(
    'artists/fetchArtists',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const search = getSearchTerm(getState() as StateSchema);

        try {
            const response: AxiosResponse<ArtistsResponse> =
                await (extra as ThunkExtraArg).api
                    .get(`${$search}?key=${AUTH_KEY}&secret=${AUTH_SECRET}`, {
                        params: {
                            q: search,
                            per_page: 5,
                            type: 'artist'
                        }
                    });

            return response && response.data ? response.data.results : rejectWithValue("Error while fetching the data");
        } catch (e) {
            return rejectWithValue("Error while making request");
        }
    }
);