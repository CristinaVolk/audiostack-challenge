import type {StateSchema} from "@/app/providers/StoreProvider";

export const getArtistDetailsReleases = (state: StateSchema) => state.artistDetails.releases
export const getArticleDetailsIsLoading = (state: StateSchema) => state.artistDetails.isLoading ?? false
export const getArticleDetailsError = (state: StateSchema) => state.artistDetails.error ?? ''
