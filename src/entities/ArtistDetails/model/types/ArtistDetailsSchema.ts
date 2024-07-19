export interface ArtistDetailsSchema {
    isLoading: boolean
    error: string
    releases: Release[]
}

export interface Release {
    artist:       string;
    id:           number;
    main_release: number;
    resource_url: string;
    role:         string;
    thumb:        string;
    title:        string;
    type:         string;
    year:         number;
}