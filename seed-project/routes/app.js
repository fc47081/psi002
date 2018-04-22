var express = require('express');
var router = express.Router();
var mongo = require('mongoose');
var criancas = require('../models/criancas');

router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/criancas/:id', function (req, res, next) {
    console.log(req.params.id);
    criancas.find({}, function (err, crianca) {
        if (err) {
            console.log('Erro no get do id');
            return next(err);
        } else {
            res.json(crianca);
        }
    });
});

var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
router.get('/message/:msg', function (req, res, next) {
    res.render('node', { message: req.params.msg });
});

router.get('/123', function (req, res, next) {
    res.send("como e ki é meus putos");
});

router.post('/message', function (req, res, next) {
    var message = req.body.message;
    res.redirect('/message/' + message);
});
module.exports = router;
