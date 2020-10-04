const todoModel = require("../models/todo.js");

class TodoController {
    // 新增todo
    static async addTodo(ctx) {
        const data = ctx.request.body;
        todoModel
    }
    // 编辑todo
    static async editTodo(ctx) {
        const data = ctx.request.body;
    }
    // 删除delTodo
    static async delTodo(ctx) {
        const data = ctx.state.user;

        return ctx.send();
    }
    // 获取todo
    static async todolist(ctx) {
        

        return ctx.send();
    }
}

module.exports = TodoController;
