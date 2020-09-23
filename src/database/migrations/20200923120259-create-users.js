'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.createTable('users', { 
       
    id: {
      type: Sequelize.INTEGER, //tipo
      primaryKey: true, // chave primaria
      autoIncrement: true, // autoIncrementavel
      allowNull: false, // Permitir nulo.
    },

    name:{
      type: Sequelize.STRING,
      allowNull: false,
    },

    email:{
      type: Sequelize.STRING,
      allowNull: false,
    },

    created_at:{ // Os campos created_at e updated_at são preenchidos no db, mas é preciso informá-los na migrations.
        type: Sequelize.DATE,
        allowNull: false,
    },

    updated_at:{
      type: Sequelize.DATE,
      allowNull: false,
    }

  
  
  });
     
  },

  down: async (queryInterface, Sequelize) => { // vai desfazer essa migration
   
      await queryInterface.dropTable('users');
     
  }
};
