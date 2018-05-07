var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    data_atividade:{ type: Date},
    tipo_da_atividade: { type: String },
    local_atividade: { type: String },
    crianca_associada: { type: String },
    turno: { type: String },
    responsavel: { type: String }

});
module.exports = mongoose.model('Atividades', schema);