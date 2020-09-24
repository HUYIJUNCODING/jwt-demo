const router = require('koa-router')()

router.get('/info',async(ctx)=> {
    console.log('info')
})

module.exports = router

