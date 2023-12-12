const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Ot', {
    numero_ot: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    observaciones: {
        type: DataTypes.STRING,
        allowNull: false,
      },       
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

}, { timestamps: false });
};
