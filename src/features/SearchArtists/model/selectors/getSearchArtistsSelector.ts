import {StateSchema} from "../../../../app/providers/StoreProvider";

export const getSearchArtistsSelector = (state: StateSchema) => state.searchArtists.search ?? ''