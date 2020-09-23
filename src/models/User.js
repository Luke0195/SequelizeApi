const { Model, DataTypes } = require('sequelize');

// Os atributos id são autoIncrementaveis então não é preciso importá-los
// E o created_at e updated_at já são auto adicionados.
class User extends Model{
   static init(sequelize){ // método de conexão
    super.init({             // campos do banco
        name: DataTypes.STRING,
        email: DataTypes.STRING, 
    },{
      sequelize
    });
   }

   static associate(models){
     this.hasMany(models.Address, {foreignKey: 'user_id', as:'addresses'})// tem muitos
   }
}

module.exports = User;
