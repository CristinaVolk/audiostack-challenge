import {AxiosInstance} from "axios";

import {SearchArtistsSchema} from "@/features/SearchArtists";
import {ArtistsListPageSchema} from "@/pages/ArtistsListPage";
import {ReleaseDetailsPageSchema} from "@/pages/ReleaseDetailsPage";
import {rtkApi} from "@/shared/api/rtkApi";


export interface StateSchema {
    searchArtists: SearchArtistsSchema,
    artistsListPage: ArtistsListPageSchema,
    releaseDetailsPage: ReleaseDetailsPageSchema,
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}