import {AxiosInstance} from "axios";

import {SearchArtistsSchema} from "@/features/SearchArtists";
import {ArtistsListSchema} from "@/pages/ArtistsListPage";
import {ArtistReleasesSchema} from "@/entities/ArtistsList";


export interface StateSchema {
    searchArtists: SearchArtistsSchema,
    artistsList: ArtistsListSchema,
    artistReleases: ArtistReleasesSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}