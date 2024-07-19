import type {StateSchema} from "@/app/providers/StoreProvider";

export const getArtistReleases = (state: StateSchema) => state.artistReleases.releases
export const getArticleReleasesIsLoading = (state: StateSchema) => state.artistReleases.isLoading ?? false
export const getArticleReleasesError = (state: StateSchema) => state.artistReleases.error ?? ''
