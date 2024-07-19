import {AxiosInstance} from "axios";

import {SearchArtistsSchema} from "@/features/SearchArtists";
import {ArtistsListSchema} from "@/pages/ArtistsListPage";
import {ArtistDetailsSchema} from "@/entities/ArtistDetails";


export interface StateSchema {
    searchArtists: SearchArtistsSchema,
    artistsList: ArtistsListSchema,
    artistDetails: ArtistDetailsSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}