import {AxiosResponse} from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


import {ThunkConfig, ThunkExtraArg} from "@/app/providers/StoreProvider";
import {$artists} from "@/shared/api/endpoints";
import {Release} from "@/entities/ArtistDetails/model/types/ArtistDetailsSchema";


export const fetchReleasesByArtist = createAsyncThunk<
    Release[],
    number,
    ThunkConfig<string>
>(
    'artists/fetchReleasesByArtist',
    async (artistId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response: AxiosResponse<any> =
                await (extra as ThunkExtraArg).api
                    .get(`${$artists}/${artistId}/releases`, {
                        params: {
                            per_page: 5,
                        }
                    });

            console.log(response.data.releases)

            return response && response.data ? response.data.releases : rejectWithValue("Error while fetching the data");
        } catch (e) {
            return rejectWithValue("Error while making request");
        }
    }
);