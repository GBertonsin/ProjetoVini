import sequelize from "../Database/database.js";

export const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Tabelas sincronizadas com sucesso!");
  } catch (error) {
    console.error("Erro ao sincronizar tabelas:", error);
  }
};

