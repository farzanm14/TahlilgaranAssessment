import axios from "axios";
import { HttpRequest } from "../types/HttpRequest";

export const baseUrl = "https://jsonplaceholder.typicode.com/";
const api = axios.create({ baseURL: baseUrl });

api.interceptors.response.use(null, (error) => {
    console.error("__httpService__ error", error);
    return Promise.reject(error);
});

// api.interceptors.response.use(function (successRes) {
//     console.info("__httpService__ successRes", successRes);
//     return successRes
// }, function (error) {
//     console.error("__httpService__ error", error);
//     return Promise.reject(error);
// })

api.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

const HttpHandler = {
    async Request(method: HttpRequest, endPoint: string, data?: any) {

        console.info("____HTTP____ ", method + " ____ " + baseUrl + endPoint, data);
        let headers = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        switch (method) {
            case HttpRequest.GET:
                return await api[HttpRequest.GET](baseUrl + endPoint, { headers });
            case HttpRequest.DELETE:
                return await api[HttpRequest.DELETE](baseUrl + endPoint, { headers });
            case HttpRequest.POST:
                return await api[HttpRequest.POST](baseUrl + endPoint, data, { headers });
            case HttpRequest.PUT:
                return await api[HttpRequest.PUT](baseUrl + endPoint, data, { headers });
            case HttpRequest.PATCH:
                return await api[HttpRequest.PATCH](baseUrl + endPoint, data, { headers });
            default:
                return console.log("Invalid Req Type")
        }
    },
};

export default HttpHandler;