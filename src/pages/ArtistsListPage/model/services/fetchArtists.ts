import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

import type {ArtistsResponse} from "../types/ArtistsResponse";

import type {ThunkConfig, ThunkExtraArg} from "@/app/providers/StoreProvider";
import {getSearchTerm} from "@/features/SearchArtists";
import {$search} from "@/shared/api/endpoints";
import {AUTH_KEY, AUTH_SECRET} from "@/shared/api/config";
import {getArtistsListPage} from "@/pages/ArtistsListPage/model/selectors/getArtistsListSelector";


export const fetchArtists = createAsyncThunk<
    ArtistsResponse,
    void,
    ThunkConfig<string>
>(
    'artists/fetchArtists',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;
        const search = getSearchTerm(getState());
        const page = getArtistsListPage(getState())

        try {
            const response: AxiosResponse<ArtistsResponse> =
                await (extra as ThunkExtraArg).api
                    .get(`${$search}?key=${AUTH_KEY}&secret=${AUTH_SECRET}`, {
                        params: {
                            q: search,
                            page,
                            per_page: 5,
                            type: 'artist'
                        }
                    });

            return response && response.data ? response.data
                : rejectWithValue("Error while fetching the data");
        } catch (e) {
            return rejectWithValue("Error while making request");
        }
    }
);