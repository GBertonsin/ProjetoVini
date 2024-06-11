import sequelize from "../Database/database.js";
import { app } from "../app.js";
import { syncDatabase } from "./sync.js";

export const connectDatabase = async () => {
  try {
    await syncDatabase();
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi estabelecida com sucesso.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
};