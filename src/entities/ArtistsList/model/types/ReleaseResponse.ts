import type { Pagination } from "@/shared/types/AxiosResponse"
import type { Release } from "@/shared/types/Release"

export interface ReleaseResponse {
    pagination: Pagination
    releases: Release[]
}
