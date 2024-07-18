import {AxiosInstance} from "axios";

import {SearchArtistsSchema} from "@/features/SearchArtists";


export interface StateSchema {
    searchArtists: SearchArtistsSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}