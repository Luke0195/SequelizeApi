const express  = require('express');
const routes  = express.Router();

routes.get('/', (request, response)=>{
  return response.json({message: ' Rota de teste '});
});


module.exports =  routes;