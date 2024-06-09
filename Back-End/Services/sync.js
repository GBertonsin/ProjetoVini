const sequelize = require("../Database/database.js");
const tipoModelo = require("../models/tipoModelo.js");
const Comentarios = require("../models/comentario.js");
const Conclusao = require("../models/conclusao.js");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar tabelas:", error);
  }
};

module.exports = syncDatabase;
