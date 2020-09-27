export default {
    port: 8080,//指定默认端口
    proxy: {
        "/api": {
            target: "http://localhost:8080", //代理服务端域名端口
            changeOrigin: true,
        },
    },
    optimizeDeps: {
        allowNodeBuiltins: [],
    },
};
