import { DataTypes } from "sequelize";
import sequelize from "../Database/database.js";
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

export default Tecnica;
