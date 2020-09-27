import request from "../framework/net/request";

export function registerAPI(data) {
    return request({
        url: "api/register",
        method: "post",
        data,
    });
}

export function loginAPI(data) {
    return request({
        url: "api/login",
        method: "post",
        data,
    });
}
