import { Artist } from "@/shared/types/Artist"

export interface Release {
    artist: string
    id: number
    main_release: number
    resource_url: string
    role: string
    thumb: string
    title: string
    type: string
    year: number
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
    series: unknown[]
    status: string
    styles: string[]
    tracklist: Tracklist[]
    uri: string
    videos: Video[]
    year: number
}

interface Community {
    contributors: Contributor[]
    data_quality: string
    have: number
    rating: Rating
    status: string
    submitter: Submitter
    want: number
}

interface Contributor {
    resource_url: string
    username: string
}

interface Rating {
    average: number
    count: number
}

interface Submitter {
    resource_url: string
    username: string
}

interface Company {
    catno: string
    entity_type: string
    entity_type_name: string
    id: number
    name: string
    resource_url: string
}

interface Extraartist {
    anv: string
    id: number
    join: string
    name: string
    resource_url: string
    role: string
    tracks: string
}

interface Format {
    descriptions: string[]
    name: string
    qty: string
}

interface Identifier {
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

interface Label {
    catno: string
    entity_type: string
    id: number
    name: string
    resource_url: string
}

interface Tracklist {
    duration: string
    position: string
    title: string
    type_: string
}

interface Video {
    description: string
    duration: number
    embed: boolean
    title: string
    uri: string
}
