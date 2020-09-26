const router = require('koa-router')();

const user  = require('./user')
const info = require('./info')

router.use('/api',user.routes(),user.allowedMethods())
router.use('/api',info.routes(),info.allowedMethods())

// module.exports = router;




