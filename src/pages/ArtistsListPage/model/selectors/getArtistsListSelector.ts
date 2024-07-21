import {StateSchema} from "@/app/providers/StoreProvider";

export const getArtistsList = (state: StateSchema) => state.artistsListPage.artistsData?.results ?? []
export const getArtistsListLimit = (state: StateSchema) => state.artistsListPage.limit ?? 0
export const getArtistsListIsLoading = (state: StateSchema) => state.artistsListPage?.isLoading ?? false
export const getArtistsListPage = (state: StateSchema) => state.artistsListPage?.page ?? 0
export const getArtistsListError = (state: StateSchema) => state.artistsListPage?.error ?? ''

