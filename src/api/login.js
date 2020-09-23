import request from '../framework/net/request'

export function registerAPI(data) {
    request({
        url: 'api/register',
        method: 'post',
        data
    })
}


export function loginAPI(data) {
    request({
        url: 'api/login',
        method: 'post',
        data
    })
}