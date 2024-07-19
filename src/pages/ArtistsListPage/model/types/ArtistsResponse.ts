import type {Pagination} from "@/shared/types/AxiosResponse";
import type {Artist} from "@/shared/types/Artist";

export interface ArtistsResponse {
    pagination: Pagination;
    results:    Artist[];
}



