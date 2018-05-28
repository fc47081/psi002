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

router.get('/', function (req, res, next) {
    Crianca.find()
        .exec(function (err, criancas) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: criancas
            });
        });
});

router.get('/:id', function (req, res) {
    Crianca.find({_id: req.params.id}).exec(function (err, crianca) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: crianca
        });
    });
});

router.post('/:id', function (req, res, next) {
    Crianca.findByIdAndUpdate(req.params.id,{$set:req.body}, function(err, crianca){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Updated Crianca',
            obj: crianca
        });
    });
});

router.delete('/:id', function (req, res) {
    Crianca.findById(req.params.id, function (err, crianca) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        crianca.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                crianca: 'Criança eliminada com sucesso!',
                obj: result
            });
        });
    });
});

module.exports = router;