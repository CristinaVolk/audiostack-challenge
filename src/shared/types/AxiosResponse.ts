export interface Pagination {
    per_page: number;
    pages:    number;
    page:     number;
    urls:     Urls;
    items:    number;
}

export interface Urls {
    last: string;
    next: string;
}