// Arquivo de conexão com a base de dados
// Será responsavel por fazer a conexão dos models com o banco

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);


module.exports = connection;
