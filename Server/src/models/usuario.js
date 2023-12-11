const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define('Usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM('admin', 'recepcion', 'mecanico', 'user' ),
      defaultValue: 'user',
      allowNull: true
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Active', 'Inactive'),
      allowNull: true,
      defaultValue: 'Active',
    },
    }, { timestamps: false });
};

