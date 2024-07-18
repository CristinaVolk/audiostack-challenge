import axios from 'axios';

import {AUTH_TOKEN, MAIN_URL} from "./config";

const $api = axios.create({
    baseURL: MAIN_URL
});


$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization =
            `Authorization: Discogs token=${AUTH_TOKEN}` || "";
    }
    return config;
});

export { $api }

