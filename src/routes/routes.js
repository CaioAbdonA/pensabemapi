const express = require ('express');
const routes = express.Router();

const funcionarioController = require('../controllers/funcionarioController');

routes.post('/funcionarios', funcionarioController.insert);

routes.get('/funcionarios', funcionarioController.index);

routes.get('/funcionarios/:id', funcionarioController.details);

module.exports = routes;