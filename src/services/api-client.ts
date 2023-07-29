import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse <T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9ce2b057a39746038d390eb3cf21b76c'
    }
})

class APIClient <T> {
    endpoint: string;

    constructor (endpoint:string) {
        this.endpoint = endpoint;
    }

    getAll = ( config: AxiosRequestConfig ) => {
        return axiosInstance
            .get <FetchResponse<T>> (this.endpoint, config)
            .then(response => response.data);
    }

    get = ( id: number | string ) => {
        return axiosInstance
            .get <T> (this.endpoint + '/' + id)
            .then(response => response.data)
    }
}

export default APIClient;