import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";

import {ReleaseResponse} from "../types/ReleaseResponse";

import {$artists} from "@/shared/api/endpoints";
import {$api} from "@/shared/api/api";
import {Release} from "@/shared/types/Release";

export const useArtistsListItemHook = (artistId: number) => {
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [releases, setReleases] = useState<Release[]>([])

    useEffect(() => {
        async function fetchReleasesByArtistId() {
            try {
                setIsLoading(true)

                const response: AxiosResponse<ReleaseResponse> =
                    await $api.get(`${$artists}/${artistId}/releases`, {
                            params: {
                                per_page: 5,
                            }
                        });

                if (response.status === 200) {
                    setReleases([...response.data.releases])
                }
                setIsLoading(false)

            } catch (e) {
                setError("Error while making request");
            }
        }

        fetchReleasesByArtistId()

    }, [artistId]);


    return {
        isLoading,
        error,
        releases
    }
}