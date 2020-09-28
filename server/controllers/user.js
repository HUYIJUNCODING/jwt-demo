const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel.js");

import { secret } from "./server/config";

class UserController {
    // 用户注册
    static async register(ctx) {
        const data = ctx.request.body;
        const checkUser = await userModel.findOne({
            username: data.username,
        });
        if (checkUser) {
            return ctx.sendError("该用户已注册");
        }
        const user = new userModel({
            username: data.username,
            password: crypto
                .createHash("md5")
                .update(data.password + "jwt_yan")
                .digest("hex"), // 注册密码加密
        });
        const result = await user.save();
        return result
            ? ctx.send("恭喜,账号注册成功!")
            : ctx.sendError("抱歉,注册失败!");
    }
    // 用户登录
    static async login(ctx) {
        const data = ctx.request.body;
        if (!data.username || !data.password) {
            return ctx.sendError("参数不合法");
        }
        const result = await userModel.findOne({
            username: data.username,
            password: crypto
                .createHash("md5")
                .update(data.password + "jwt_yan")
                .digest("hex"),
        });
        if (!result) return ctx.sendError("用户名或密码错误");
        const token = jwt.sign(
            {
                username: result.username,
                _id: result._id,
            },
            secret,
            { expiresIn: "2h" } //Eg: 60, "2 days", "10h", "7d"
        );
        return ctx.send(token, "登录成功");
    }
    // 获取用户信息
    static async userinfo(ctx) {
        const data = ctx.request.body;
        const user = await userModel.findById(data._id);
        if (!user) return ctx.sendError("用户信息不存在");
        const result = {
            _id: user._id,
            name: user.name,
        };
        return ctx.send(result);
    }
}

module.exports = UserController;
