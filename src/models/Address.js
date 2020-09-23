const {Model, DataTypes} = require('sequelize');


class Address extends Model{
  static init(sequelize){
    super.init({
      zipcode: DataTypes.STRING,
      street: DataTypes.STRING,
      number:DataTypes.INTEGER
    },{
      sequelize
    })
  }

  static associate(models){ // Realizando associações 
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner'}) // Endereço pertenci ao Usuário
  }

}

module.exports = Address;