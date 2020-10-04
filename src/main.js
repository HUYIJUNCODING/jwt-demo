import { createApp } from "vue";
import App from "./App.vue";
import Antd from 'ant-design-vue';

import "./index.css";
import 'ant-design-vue/dist/antd.css';

import router from "./router";

router.beforeEach((to,from ,next) => {
    if (!to.meta.noAuth && !localStorage.getItem('token')) {
        next('/login')
    }else next()
});

const app = createApp(App);
app.use(Antd);
app.use(router);

app.mount("#app");
