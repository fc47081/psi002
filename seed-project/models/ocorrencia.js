var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    data_ocorrencia:{ type: Date},
    tipo: { type: String },
    local_ocorrencia: { type: String },
    crianca_associada: { type: String },
    turno: { type: String },
    descricao: { type: String },
    responsavel: { type: String }

});
module.exports = mongoose.model('Ocorrencia', schema);
