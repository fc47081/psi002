var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var user = new User({
        nome: req.body.nome,
        idade: req.body.idade,
        estatuto: req.body.estatuto,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    User.findOne({email: req.body.email}, function (err, user2) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user2) {
            return res.status(401).json({
                title: 'Utilizador já existe!',
                error: {message: 'Utilizador já existe!'}
            });
        } else {
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
        }
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Utilizador não existe!',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Password errada!',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id
        });
    });
});

router.get('/:id', function (req, res) {
    User.find({_id: req.params.id}).exec(function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: user
        });
    });
});

router.post('/:id', function (req, res, next) {
    User.findByIdAndUpdate(req.params.id,{$set: req.body}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Updated User',
            obj: user
        });
    });
});

module.exports = router;