'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clasificacion extends Model {
    static associate(models) {
    }
  };

  Clasificacion.init({
    idclasificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    nombre: {
       type: DataTypes.STRING(50),
       allowNull: false      
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
  }, {
    sequelize,
    modelName: 'Clasificacion',
  });
  
  return Clasificacion;
};