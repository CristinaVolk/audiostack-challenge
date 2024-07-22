import { ReleaseFullType } from "@/shared/types/Release"

export interface ReleaseDetailsPageSchema {
    isLoading: boolean
    error: string
    release: ReleaseFullType
}
