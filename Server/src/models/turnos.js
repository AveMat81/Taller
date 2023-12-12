const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Turnos', {
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    observaciones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, { timestamps: false });
};
