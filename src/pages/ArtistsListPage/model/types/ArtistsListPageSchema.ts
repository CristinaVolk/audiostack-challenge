import type {Artist} from "@/shared/types/Artist";


export interface ArtistsListPageSchema {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;

    artists?: Artist[];
}

