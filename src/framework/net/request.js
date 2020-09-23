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
        // config.headers.token = getMallToken();

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// request interceptor
service.interceptors.response.use(
    (res) => {
        if (res.error !== 0) {
            message.error(res["error_reason"], 1.5 * 1000);
            return { fail: true };
        } else return response.data;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
