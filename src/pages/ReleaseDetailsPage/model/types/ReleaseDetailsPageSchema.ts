import {Artist} from "@/shared/types/Artist";

export interface ReleaseDetailsPageSchema {
    isLoading: boolean
    error: string
    release: ReleaseFullType
}

export interface ReleaseFullType {
    title: string
    id: number
    artists: Artist[]
    data_quality: string
    thumb: string
    community: Community
    companies: Company[]
    country: string
    date_added: string
    date_changed: string
    estimated_weight: number
    extraartists: Extraartist[]
    format_quantity: number
    formats: Format[]
    genres: string[]
    identifiers: Identifier[]
    images: Image[]
    labels: Label[]
    lowest_price: number
    master_id: number
    master_url: string
    notes: string
    num_for_sale: number
    released: string
    released_formatted: string
    resource_url: string
    series: any[]
    status: string
    styles: string[]
    tracklist: Tracklist[]
    uri: string
    videos: Video[]
    year: number
}

export interface Community {
    contributors: Contributor[]
    data_quality: string
    have: number
    rating: Rating
    status: string
    submitter: Submitter
    want: number
}

export interface Contributor {
    resource_url: string
    username: string
}

export interface Rating {
    average: number
    count: number
}

export interface Submitter {
    resource_url: string
    username: string
}

export interface Company {
    catno: string
    entity_type: string
    entity_type_name: string
    id: number
    name: string
    resource_url: string
}

export interface Extraartist {
    anv: string
    id: number
    join: string
    name: string
    resource_url: string
    role: string
    tracks: string
}

export interface Format {
    descriptions: string[]
    name: string
    qty: string
}

export interface Identifier {
    type: string
    value: string
}

export interface Image {
    height: number
    resource_url: string
    type: string
    uri: string
    uri150: string
    width: number
}

export interface Label {
    catno: string
    entity_type: string
    id: number
    name: string
    resource_url: string
}

export interface Tracklist {
    duration: string
    position: string
    title: string
    type_: string
}

export interface Video {
    description: string
    duration: number
    embed: boolean
    title: string
    uri: string
}