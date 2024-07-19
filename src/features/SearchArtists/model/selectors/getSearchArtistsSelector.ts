import type {StateSchema} from "@/app/providers/StoreProvider";

export const getSearchTerm = (state: StateSchema) => state.searchArtists.search ?? ''