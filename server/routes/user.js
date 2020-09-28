const router = require("koa-router")();

const UserController = require('../controllers/user');

//注册
router.post("/register", UserController.register);

//登录
router.post("/login", UserController.login);

//用户信息查询
router.post("/userinfo", UserController.userinfo);

module.exports = router;
