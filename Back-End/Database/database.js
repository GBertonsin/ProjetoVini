import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db", process.env.DB_USER, process.env.DB_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
  port: 3306,
});

export default sequelize;
