import { AxiosError, AxiosResponse } from "axios"

import { ArtistsResponse, ParamsConfig } from "../types/ArtistsResponse"

import { rtkApi } from "@/shared/api/rtkApi"
import { $api } from "@/shared/api/api"
import { $search } from "@/shared/consts/api/endpoints"
import { AUTH_KEY, AUTH_SECRET } from "@/shared/api/config"
import { statusCodes } from "@/shared/consts/api/errors"

export const artistsListPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArtistsList: build.query<ArtistsResponse, ParamsConfig>({
            // @ts-ignore
            queryFn: async (arg: ParamsConfig) => {
                try {
                    const response: AxiosResponse<ArtistsResponse> =
                        await $api.get(
                            `${$search}?key=${AUTH_KEY}&secret=${AUTH_SECRET}`,
                            { params: arg }
                        )

                    if (response.status === statusCodes.NOT_FOUND) {
                        return {
                            error: "Resource not found",
                        }
                    }

                    if (response.status === statusCodes.INTERNAL_SERVER) {
                        return {
                            error: "Internal server error",
                        }
                    }

                    return { data: { ...response.data } }
                } catch (error: unknown) {
                    if (error instanceof AxiosError) {
                        if (
                            !error.response ||
                            error.code === AxiosError.ERR_NETWORK
                        ) {
                            return { error: "Can not reach server" }
                        }
                    }

                    return { error: (error as AxiosError).message }
                }
            },
        }),
    }),
})

export const useArtistsListPage = artistsListPageApi.useGetArtistsListQuery
