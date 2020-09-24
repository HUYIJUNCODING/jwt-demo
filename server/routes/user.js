const router  = require('koa-router')()

//注册
router.post('/register',async(ctx)=> {
    console.log('register')
})

//登录
router.post('/login',async(ctx)=> {
    console.log('login')
})

//用户信息查询
router.post('/userinfo',async(ctx)=> {
    console.log('userinfo')
})

module.exports = router
