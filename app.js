const Koa = require("koa");
const app = new Koa();
const json = require("koa-json"); //response JOSN美化中间件
const koajwt = require("koa-jwt"); //Koa JWT 验证中间件
const bodyparser = require("koa-bodyparser"); // Koa body体解析中间件

errorHandle = require("./server/middlewares/errorHandle.js");
//     sendHandle = require('./server/middlewares/sendHandle.js');
// const serve = require("koa-static"); // Koa 静态文件服务中间件

require("./server/framework/services/conndb"); //连接数据库
const utils = require("./server/framework/utils");
const router = require("./server/routes/index");

import { port, secret, unless_path } from "./server/config";

app.use(errorHandle)
    .use(utils.logger())
    .use(json())
    .use(bodyparser())
    .use(
        koajwt({
            secret,
            }).unless({
                //设置不需要校验令牌的api
            path: unless_path,
        })
    )
    .use(router.routes(), router.allowedMethods());

app.listen(port, () =>
    console.log(`✅  The server is running at http://localhost:${port}/`)
);
