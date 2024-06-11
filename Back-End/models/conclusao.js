import { DataTypes } from "sequelize";
import sequelize from "../Database/database.js";

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

export default Conclusoes

