const express = require('express')

//Rotas (quando o servidor for acessado, pra onde ele vai???)
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Olá Mundo 2023!!!');
});

router.get('/contato',(req,res)=>{
    res.send('Essa é a página de contato do seu site!!!');
});

module.exports = router;