import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import {
    StateSchema,
    ThunkExtraArg,
} from './StateSchema';

import { $api } from '@/shared/api/api';
import {searchArtistsReducer} from "@/features/SearchArtists";


export function createReduxStore(
    initialState?: DeepPartial<StateSchema> | undefined,
) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        searchArtists: searchArtistsReducer,
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
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
