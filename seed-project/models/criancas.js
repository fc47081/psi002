var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    nome: { type: String },
    sexo: { type: String },
    data_de_nascimento: { type: Date },
    data_de_entrada: { type: Date },
    tipo_de_sangue: { type: String },
    cc: { type: String },
    nif: { type: String },
    responsavel: { type: String }
});
module.exports = mongoose.model('Criancas', schema);