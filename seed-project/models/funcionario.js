var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String },
    idade: { type: Number },
    estatuto: { type: String },
    password: { type: String }
});
module.exports = mongoose.model('Funcionario', schema);
