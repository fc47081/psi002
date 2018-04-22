var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String },
    data_de_nascimento: { type: Date },
    tipo_de_sangue: { type: String },
    cc: { type: Number },//cartao de cidadao
    nif: { type: Number },
    data_de_entrada: { type: Date },
    alergias: { type: Array }
});
module.exports = mongoose.model('Criancas', schema);