import { ArtistsResponse } from "../types/ArtistsResponse"

export interface ArtistsListPageSchema {
    isLoading?: boolean
    error?: string

    // pagination
    page: number
    limit?: number

    artistsData?: ArtistsResponse
}
