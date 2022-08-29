import axios from "axios";
import { Platform } from "react-native";
import { HttpRequest } from "../types/HttpRequest";

export const baseUrl = "https://jsonplaceholder.typicode.com/";
const api = axios.create({ baseURL: baseUrl });

api.interceptors.request.use(async (cnf) => {
    const headers = cnf.headers || {};
    headers["Content-Type"] = "application/json";
    headers["DeviceVersion"] = Platform.Version;
    headers["DeviceInfo"] = Platform.OS == "android" ? "android" : "ios";

});

let res//TODO
api.interceptors.response.use(res, (error) => {
    if (
        error.response &&
        error.response.status &&
        error.response.status >= 400 &&
        error.response.status < 500 &&
        error.response.data &&
        error.response.data.message
    ) {
        console.error("__httpService__ error", error.response);
    }
    return Promise.reject(error);
});

const HttpHandler = {
    async Request(method: HttpRequest, endPoint: string, data?: any, headers?: any) {

        console.info("____HTTP____ ", method + " ____ " + baseUrl + endPoint, data);

        switch (method) {
            case HttpRequest.GET:
                return await api[HttpRequest.GET](baseUrl + endPoint, { headers: headers, });
            case HttpRequest.DELETE:
                return await api[HttpRequest.DELETE](baseUrl + endPoint, { headers: headers, });
            case HttpRequest.POST:
                return await api[HttpRequest.POST](baseUrl + endPoint, data, { headers: headers, });
            case HttpRequest.PUT:
                return await api[HttpRequest.PUT](baseUrl + endPoint, data, { headers: headers, });
            case HttpRequest.PATCH:
                return await api[HttpRequest.PATCH](baseUrl + endPoint, data, { headers: headers, });
            default:
                return console.log("Invalid Req Type")
        }
    },
};

export default HttpHandler;