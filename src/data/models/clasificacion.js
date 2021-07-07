'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clasificacion extends Model {
    static associate(models) {
      Clasificacion.hasMany(models.Categoria,{ foreignKey: 'idclasificacion'})
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{ 
          msg: 'El campo nombre no puede ser nulo'
        },
        len: {
          args: [2,50],
          msg: 'El rango permitido es entre 2 y 50 caracteres'
        }
       }   
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Clasificacion',
    tableName:'clasificacion',
    timestamps: false
  });
  return Clasificacion;
};