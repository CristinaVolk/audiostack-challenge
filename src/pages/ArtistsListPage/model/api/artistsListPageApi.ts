import {rtkApi} from "@/shared/api/rtkApi";

import {ArtistsResponse, ParamsConfig} from "../types/ArtistsResponse";
import {$search} from "@/shared/api/endpoints";
import {AUTH_KEY, AUTH_SECRET} from "@/shared/api/config";


export const artistsListPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArtistsList: build.query<ArtistsResponse, ParamsConfig>({
            query: (arg: ParamsConfig) => ({
                url: `${$search}?key=${AUTH_KEY}&secret=${AUTH_SECRET}`,
                params: arg,
            })
        }),
    })
    })

export const useArtistsListPage = artistsListPageApi.useGetArtistsListQuery;
