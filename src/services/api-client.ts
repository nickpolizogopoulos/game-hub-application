import axios from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9ce2b057a39746038d390eb3cf21b76c'
    }
})