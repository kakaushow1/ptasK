'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pessoa.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    idade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pessoa',
  });
  return pessoa;
};