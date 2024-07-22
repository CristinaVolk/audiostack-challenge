import type { Pagination } from "@/shared/types/AxiosResponse"
import type { Artist } from "@/shared/types/Artist"

export interface ArtistsResponse {
    pagination: Pagination
    results: Artist[]
}

export interface ParamsConfig {
    q: string
    type: string
    per_page: number
    page: number
}
