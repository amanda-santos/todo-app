const Todo = require('./todo')

// métodos HTTP
Todo.methods(['get', 'post', 'put', 'delete'])

// new: true para retornar o novo objeto, atualizado, ao executar o Update
// runValidators: true para ativar as validações dos dados em métodos Update
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo