const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database");
const Tecnica = sequelize.define(
  "Tecnica",
  {
    Id_tecn: {
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
    tableName: "Tecnica",
    timestamps: false,
  }
);

module.exports = Tecnica;
