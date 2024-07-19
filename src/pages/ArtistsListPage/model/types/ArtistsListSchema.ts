import {Artist} from "./ArtistsResponse";

export interface ArtistsListSchema {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;

    artists?: Artist[];
}

