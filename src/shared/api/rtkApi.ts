import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { AUTH_TOKEN, MAIN_URL } from "@/shared/api/config"

export const rtkApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: MAIN_URL,
        prepareHeaders: (headers) => {
            const token = `Discogs token=${AUTH_TOKEN}` || ""
            if (token) {
                headers.set("Authorization", token)
            }

            return headers
        },
    }),
    endpoints: () => ({}),
})
