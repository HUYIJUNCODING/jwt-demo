const todoModel = require("../models/todoModel.js");

class TodoController {
    // 新增todo
    static async addTodo(ctx) {
        const data = ctx.request.body;
        const result = await todoModel.create(data);
        return result ? ctx.send({id: result._id}) : ctx.sendError("添加todo失败!");
    }
    // 编辑todo
    // Model.findByIdAndUpdate(id, [update], [options], [callback])
    static async editTodo(ctx) {
        const data = ctx.request.body;
       const result = await todoModel.findByIdAndUpdate(data.id,{title: data.title,completed: data.completed});
       if(!result) return ctx.sendError("编辑todo信息不存在");
       ctx.send();
    }
    // 删除removeTodo
    // Model.findByIdAndRemove(id, [options], [callback])
    static async removeTodo(ctx) {
        const data = ctx.request.body;
        const result = todoModel.findByIdAndRemove(data.id);
        if(!result) return ctx.sendError("todo删除失败");
        return ctx.send();
    }
    // 获取todo
    static async todolist(ctx) {
      const result = await todoModel.find({},{title: 1,completed: 1})     
      return ctx.send({list: result || []});
    }
}

module.exports = TodoController;
