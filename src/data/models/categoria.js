'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.belongsTo(models.Clasificacion, {foreignKey:'idclasificacion'})
    }
  };
  Categoria.init({
    idcategoria: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    idclasificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg:'La clasificación es obligatoria'
        },
        isInt: {
          msg: 'El campo idclasificación debe ser entero'
        }
      }
    },
    nombre: {
      type: DataTypes.STRING(50),
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
      defaultValue:1,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName:'categoria',
    timestamps: false
    
  });
  return Categoria;
};