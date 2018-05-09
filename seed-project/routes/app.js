var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        nome: req.body.nome,
        idade: req.body.idade,
        estatuto: req.body.estatuto,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/', function (req, res, next) {
    var crianca = new Crianca({
        nome: req.body.nome,
        sexo: req.body.sexo,
        data_de_nascimento: req.body.data_de_nascimento,
        data_de_entrada: req.body.data_de_entrada,
        tipo_de_sangue: req.body.tipo_de_sangue,
        cc: req.body.cc,
        nif: req.body.nif,
        responsavel: req.body.responsavel
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

router.post('/', function (req, res, next) {
    var atividade = new Atividade({
        data_atividade: req.body.data_atividade,
        tipo_da_atividade: req.body.tipo_da_atividade,
        local_atividade: req.body.local_atividade,
        crianca_associada: req.body.crianca_associada,
        turno: req.body.turno,
        responsavel: req.body.responsavel
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

router.post('/', function (req, res, next) {
    var ocorrencia = new Ocorrencia({
        data_ocorrencia: req.body.data_ocorrencia,
        tipo: req.body.tipo,
        local_ocorrencia: req.body.local_ocorrencia,
        crianca_associada: req.body.crianca_associada,
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
