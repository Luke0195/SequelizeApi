const Address  = require('../models/Address');
const User = require('../models/User');
const { response } = require('express');
const { index } = require('./UserController');


module.exports ={
  
  async index(request, response){
    const { user_id } = request.params;

    const user = await  User.findByPk(user_id,{
      include:{ association: 'addresses'} 
    });
    return response.json(user);

  },
 
  async store(request, reponse){
   const { user_id } = request.params;
   const { zipcode, street, number } = request.body;
   
   const user = await User.findByPk(user_id); // buscando a chavem estrangeira pela referencia

   if(!user){
     return response.status(400).json({ erro: 'User not found'});
   }

   const address = await Address.create({ 
     zipcode,
     street,
     number,
     user_id
   });
   return reponse.json(address);
  }
}