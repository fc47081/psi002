var express = require('express');
var router = express.Router();
var Ocorrencia = require('../models/ocorrencia');
var Crianca = require('../models/criancas');

router.post('/', function (req, res, next) {
    var ocorrencia = new Ocorrencia({
        data_ocorrencia:req.body.data_ocorrencia,
        tipo:  req.body.tipo,
        local_ocorrencia:  req.body.local_ocorrencia,
        crianca_associada:  req.body.crianca_associada,
        turno: req.body.turno,
        descricao: req.body.descricao,
        responsavel: req.body.responsavel
    });
    ocorrencia.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Ocorrencia criada',
            obj: result
        });
    });
});

module.exports = router;