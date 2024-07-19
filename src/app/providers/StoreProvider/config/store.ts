import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import {
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';

import { $api } from '@/shared/api/api';
import {searchArtistsReducer} from "@/features/SearchArtists";
import {artistsListReducer} from "@/pages/ArtistsListPage";
import {artistsDetailsReducer} from "@/entities/ArtistDetails";


export function createReduxStore(
    initialState?: DeepPartial<StateSchema> | undefined,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        searchArtists: searchArtistsReducer,
        artistsList: artistsListReducer,
        artistDetails: artistsDetailsReducer
    };

    const extraThunk: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: rootReducer,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraThunk,
                },
            }),
    })

    return store;
}

