const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Turnos', {
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    Observaciones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, { timestamps: false });
};
