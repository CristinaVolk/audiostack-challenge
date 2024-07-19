import type {Artist} from "@/shared/types/Artist";


export interface ArtistsListSchema {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;

    artists?: Artist[];
}

