const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Historico', {
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, { timestamps: false });
};
