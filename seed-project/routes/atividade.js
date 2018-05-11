var express = require('express');
var router = express.Router();
var Atividade = require('../models/atividade');
var Crianca = require('../models/criancas');

router.post('/', function (req, res, next) {
    var atividade = new Atividade({
        data_atividade:req.body.data_atividade,
        tipo_da_atividade:  req.body.tipo_da_atividade,
        local_atividade:  req.body.local_atividade,
        crianca_associada:  req.body.crianca_associada,
        responsavel: req.body.responsavel,
        check: req.body.check
    });
    atividade.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Atividade criada',
            obj: result
        });
    });
});

module.exports = router;