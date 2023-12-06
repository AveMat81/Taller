const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Ot', {
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    numero_ot: {
        type: DataTypes.STRING,
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
