import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"

import { StateSchema, ThunkExtraArg } from "./StateSchema"

import { $api } from "@/shared/api/api"
import { searchArtistsReducer } from "@/features/SearchArtists"
import { releaseDetailsPageReducer } from "@/pages/ReleaseDetailsPage"
import { artistsListPageReducer } from "@/pages/ArtistsListPage"
import { rtkApi } from "@/shared/api/rtkApi"

export function createReduxStore(
    initialState?: DeepPartial<StateSchema> | undefined
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        searchArtists: searchArtistsReducer,
        artistsListPage: artistsListPageReducer,
        releaseDetailsPage: releaseDetailsPageReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    }

    const extraThunk: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument: extraThunk },
            }).concat(rtkApi.middleware),
    })

    return store
}
