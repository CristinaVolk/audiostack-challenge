import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import {
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';

import { $api } from '@/shared/api/api';
import {searchArtistsReducer} from "@/features/SearchArtists";
import {releaseDetailsPageReducer} from "@/pages/ReleaseDetailsPage";
import {artistsListPageReducer} from "@/pages/ArtistsListPage";


export function createReduxStore(
    initialState?: DeepPartial<StateSchema> | undefined,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        searchArtists: searchArtistsReducer,
        artistsListPage: artistsListPageReducer,
        releaseDetailsPage: releaseDetailsPageReducer
    };

    const extraThunk: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraThunk,
                },
            }),
    })

    return store;
}

