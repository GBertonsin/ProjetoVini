import { DataTypes } from "sequelize";
import sequelize from "../Database/database.js";

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

export default Comentarios;
