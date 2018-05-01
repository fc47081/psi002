var express = require('express');
var router = express.Router();
var Crianca = require('../models/criancas');

router.post('/', function (req, res, next) {
    var crianca = new Crianca({
        nome: req.body.nome,
        sexo: req.body.sexo,
        data_de_nascimento: req.body.data_de_nascimento,
        data_de_entrada: req.body.data_de_entrada,
        tipo_de_sangue: req.body.tipo_de_sangue,
        cc: req.body.cc,
        nif: req.body.nif
    });
    crianca.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Criança criada',
            obj: result
        });
    });
});

module.exports = router;