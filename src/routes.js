const express  = require('express');
const routes  = express.Router();


const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');

// Rotas de Usuários
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

// Rotas de Endereço
routes.post('/users/:user_id/addresses',AddressController.store);
routes.get('/users/:user_id/addresses', AddressController.index);

module.exports =  routes;