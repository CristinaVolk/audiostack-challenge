import {StateSchema} from "@/app/providers/StoreProvider";

export const getArtistsList = (state: StateSchema) => state.artistsList.artists ?? []
export const getArtistsListIsLoading = (state: StateSchema) => state.artistsList.isLoading ?? false
export const getArtistsListPage = (state: StateSchema) => state.artistsList.page ?? 0
export const getArtistsListLimit = (state: StateSchema) => state.artistsList.limit ?? 0
export const getArtistsListError = (state: StateSchema) => state.artistsList.error ?? ''

