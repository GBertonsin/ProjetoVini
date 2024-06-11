import { DataTypes } from "sequelize";
import sequelize from "../Database/database.js";

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

export default Observacao;
