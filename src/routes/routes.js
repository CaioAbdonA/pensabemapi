const express = require ('express');
const routes = express.Router();

const funcionarioController = require('../controllers/funcionarioController');
const vereadoresController = require('../controllers/vereadoresEOutrosController');

//rotas funcionarios
routes.post('/funcionarios', funcionarioController.insert);

routes.get('/funcionarios', funcionarioController.index);

routes.get('/funcionarios/:nome', funcionarioController.details); 

routes.get('/funcionariosMedia/:cargo', funcionarioController.detailsMediaCargo);

routes.get('/funcionariosN/:nome', funcionarioController.pesquisaTag);
//rotas vereadores e funcionarios da camara
routes.post('/fcamara', vereadoresController.insert);

routes.get('/fcamara', vereadoresController.index);

routes.get('/fcamara/:id', vereadoresController.details);


module.exports = routes;