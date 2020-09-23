'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('addresses', { 
       
    id: {
      type: Sequelize.INTEGER, //tipo
      primaryKey: true, // chave primaria
      autoIncrement: true, // autoIncrementavel
      allowNull: false, // Permitir nulo.
    },

    user_id:{ // Relacionamento 1 para N 
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {  model: 'users', key:'id'}, // Fazendo a referencia da chave estrangeira.
      onUpdate: 'CASCADE', // Qualquer mudança será refletida.
      onDelete: 'CASCADE', // Qualquer exclusão será refletida.
    },

    zipcode:{
      type: Sequelize.STRING,
      allowNull: false,
    },



    street:{
      type: Sequelize.STRING,
      allowNull: false,
    },

    number:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    created_at:{ // Os campos created_at e updated_at são preenchidos no db, mas é preciso informa
        type: Sequelize.DATE,
        allowNull: false
    },

    updated_at:{
      type: Sequelize.DATE,
      allowNull: false,

    }

  
  
  });
     
  },

  down: async (queryInterface, Sequelize) => { // vai desfazer essa migration
   
      await queryInterface.dropTable('addresses');
     
  }
};
