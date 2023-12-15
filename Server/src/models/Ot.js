const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Ot', {
    numero_ot: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
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
