const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database");

const Conclusoes = sequelize.define(
  "Conclusoes",
  {
    Id_conc: {
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
    tableName: "Conclusoes",
    timestamps: false,
  }
);

module.exports = Conclusoes;
