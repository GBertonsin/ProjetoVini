const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database");

const Comentarios = sequelize.define(
  "Comentarios",
  {
    Id_coments: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Comentarios",
    timestamps: false,
  }
);

module.exports = Comentarios;
