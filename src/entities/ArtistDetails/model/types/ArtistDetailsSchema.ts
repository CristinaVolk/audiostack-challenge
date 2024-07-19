import type {Pagination} from "@/shared/types/AxiosResponse";
import type {Release} from "@/shared/types/Release";


export interface ArtistDetailsSchema {
    isLoading: boolean
    error: string
    releases: Release[]
}

export interface ReleaseResponse {
    pagination: Pagination;
    releases:    Release[];
}