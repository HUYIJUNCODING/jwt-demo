const router = require("koa-router")();

//注册
router.post("/register", async (ctx) => {
    console.log("register");
});

//登录
router.post("/login", async (ctx) => {  
    ctx.body = {
        data: ctx.request.body,
        error: 0,
        error_reason: '登录成功'
    }
    console.log("------login---------");
});

//用户信息查询
router.post("/userinfo", async (ctx) => {
    console.log("userinfo");
});

module.exports = router;
