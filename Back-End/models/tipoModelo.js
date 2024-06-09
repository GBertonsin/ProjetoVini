const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database");
const Comentarios = require("../models/comentario");
const Conclusoes = require("../models/conclusao");
const Tecnica = require("../models/tecnica");
const Observacao = require("../models/observacao");

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

module.exports = TipoModelo;
