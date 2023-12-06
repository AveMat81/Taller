const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Vehicle', {
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    año: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fechaVTV: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, { timestamps: false });
};
