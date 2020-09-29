import axios from "axios";
import { message } from "ant-design-vue";

const service = axios.create({
    timeout: 3000, // request timeout
    transformRequest: [
        function (data) {
            if (data instanceof FormData) return data;
            else return JSON.stringify(data);
        },
    ],
    headers: {
        "Content-Type": "application/json",
    },
});

service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// request interceptor
service.interceptors.response.use(
    response => {  
        console.log(response.data,'data')
        if (response.data.error !== 0) {
            message.error(response.data["error_reason"]);
            return { fail: true };
        } else return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
