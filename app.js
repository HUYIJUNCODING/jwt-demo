const koa = require('koa');
// const json = require('koa-json'); //response JOSN美化中间件    
const koajwt = require('koa-jwt');//Koa JWT 验证中间件
const serve = require('koa-static'); // Koa 静态文件服务中间件
const bodyparser = require('koa-bodyparser');// Koa body体解析中间件

// const db = require('./server/config/db.js'),
//     errorHandle = require('./server/middlewares/errorHandle.js'),
//     sendHandle = require('./server/middlewares/sendHandle.js');

const router = require('./server/routes/index.js');

const app = new koa();
// app.use(json());
app.use(bodyparser());
// app.use(koajwt({
//         secret: 'my_token'
//     }).unless({
//         path: [/\/api\/register/, /\/api\/login/]
//     }));

app.use(router.routes()).use(router.allowedMethods())

app.listen('3000', () => {
    console.log('the server is starting at port 3000');
})