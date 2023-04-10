//fazer a importação do express
const express = require('express')
const router = require('./routes/index')

//configurações básicas do aplicativo
const app = express();
app.use('/',router); //foi passado apenas 1 rota, pois criamos apenas 1

app.use(express.json()); // requisicoes post sao tratadas como get

module.exports = app;



