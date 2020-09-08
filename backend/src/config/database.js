// ARQUIVO DE CONEXÃO AO BANCO DE DADOS

const mongoose = require('mongoose')

// a api de promises do mongoose vai usar as promises do próprio node
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo') //bla