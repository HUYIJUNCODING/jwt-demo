const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: String,
})

const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo;