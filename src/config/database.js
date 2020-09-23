// Arquivo de credenciais do banco de dados

module.exports ={
  dialect: 'mysql',
  host:'localhost',
  username: 'root',
  password: '',
  database: 'sqlnode',
  define:{  // Definições que o meu banco de dados terá
    timestamps: true,  // Isso vai permitir que toda tabela terá um campo created_at e update_at
    underscored: true, // Vai permitir _ entre os elementos o sequelize usa snakecase : useGroup
  },
};

