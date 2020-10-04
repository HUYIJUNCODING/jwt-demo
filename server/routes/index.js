const router = require('koa-router')();

const user  = require('./user')
const todo = require('./todo')

router.use('/api',user.routes(),user.allowedMethods())
router.use('/api/todo',todo.routes(),todo.allowedMethods())

module.exports = router;




