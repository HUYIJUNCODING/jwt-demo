import request from "../framework/net/request";


export function addTodoAPI(data= {}) {
    return request({
        url: "api/todo/add",
        method: "post",
        data,
        noAuth:false
    });
}

export function editTodoAPI(data= {}) {
    return request({
        url: "api/todo/edit",
        method: "post",
        data,
        noAuth:false
    });
}

export function delTodoAPI(data= {}) {
    return request({
        url: "api/todo/delete",
        method: "post",
        data,
        noAuth:false
    });
}

export function todolistAPI(data= {}) {
    return request({
        url: "api/todo/list",
        method: "get",
        data,
        noAuth:false
    });
}