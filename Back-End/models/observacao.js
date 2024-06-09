const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database");

const Observacao = sequelize.define(
  "Observacao",
  {
    Id_obs: {
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
    tableName: "Observacao",
    timestamps: false,
  }
);

module.exports = Observacao;
