var request = require('request');
var atualizarBanco = require('./attBanco.js');

const url = 'http://www.licitacao.pmmc.com.br/Transparencia/vencimentos2';

var funcionarios = [];

request(url, (error, response, body)=>{
    const res = JSON.parse(body);
    atualizarBanco(res.servidores);
})