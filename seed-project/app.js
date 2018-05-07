var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var appRoutes = require('./routes/app');
var userRoutes = require('./routes/user');
var criancaRoutes = require('./routes/crianca');
var atividadeRoutes = require('./routes/atividade');

var app = express();
// connecta a mongoDB
mongoose.connect('mongodb://localhost:27017/mimar').then(function(db){
console.log('Conectando ao Mongo...');
//criar a app
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.jpeg')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

//criação do user
app.use('/user', userRoutes);

//criação do crianca
app.use('/crianca', criancaRoutes);

//criação da atividade
app.use('/atividade', atividadeRoutes);

//qualquer pedido vai para a var appRoutes
app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});
console.log('A espera de conexões na porta 3000');
});
module.exports = app;