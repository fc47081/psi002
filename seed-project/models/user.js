var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
    email: { type: String },
    password: { type: String },
    nome: { type: String },
    idade: { type: String },
    estatuto: { type: String }
});

module.exports = mongoose.model('User', schema);