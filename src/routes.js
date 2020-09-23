const express  = require('express');
const routes  = express.Router();


const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');


routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

routes.post('/users/:user_id/address',AddressController.store);


module.exports =  routes;