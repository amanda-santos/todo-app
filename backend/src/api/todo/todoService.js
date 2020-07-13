const Todo = require('./todo')

// métodos HTTP
Todo.methods(['get', 'post', 'put', 'delete'])

// para ativar as validações dos dados em métodos Update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo