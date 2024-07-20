import {StateSchema} from "@/app/providers/StoreProvider";

export const getReleaseDetails = (state: StateSchema) => state.releaseDetailsPage?.release ?? undefined
export const getReleaseDetailsIsLoading = (state: StateSchema) => state.artistsListPage?.isLoading ?? false
export const getReleaseDetailsError = (state: StateSchema) => state.artistsListPage?.error ?? ''

