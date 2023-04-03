//fazer a importação do express
const express = require('express')

//Rotas (quando o servidor for acessado, pra onde ele vai???)
const router = express.Router();
router.get('/',(req,res)=>{
    res.send('Olá Mundo!!!');
});

//configurações básicas do aplicativo
const app = express();
app.use('/',router); //foi passado apenas 1 rota, pois criamos apenas 1

module.exports = app;



