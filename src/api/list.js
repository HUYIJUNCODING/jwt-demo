import request from "../framework/net/request";

export function listAPI(data) {
    return request({
        url: "api/list",
        method: "get",
        data,
    });
}
