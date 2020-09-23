import request from '../framework/net/request'

export function listAPI(data) {
    request({
        url: 'api/list',
        method: 'get',
        data
    })
}
