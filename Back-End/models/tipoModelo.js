import { DataTypes } from "sequelize";
import sequelize from "../Database/database.js";
import Comentarios from "../models/comentario.js";
import Conclusoes from "../models/conclusao.js";
import Observacao from "../models/observacao.js";
import Tecnica from "../models/tecnica.js";

const TipoModelo = sequelize.define(
  "TipoModelo",
  {
    Id_model: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "TipoModelo",
    timestamps: false,
  }
);
TipoModelo.hasMany(Comentarios, { foreignKey: "Id_model" });
TipoModelo.hasMany(Conclusoes, { foreignKey: "Id_model" });
TipoModelo.hasMany(Observacao, { foreignKey: "Id_model" });
TipoModelo.hasMany(Tecnica, { foreignKey: "Id_model" });

export default TipoModelo;
