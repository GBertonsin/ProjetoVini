const syncDatabase = require("./sync");
const sequelize = require("../Database/database");
const express = require("express");
const bodyParser = require("body-parser");
const tipoModeloRoutes = require("../Routes/tipoModeloRoutes");
const conclusaoRoutes = require("../Routes/conclusaoRoutes.js");
const comentarioRoutes = require("../Routes/comentarioRoutes.js");
const observacaoRoutes = require("../Routes/observacaoRoutes.js");
const tecnicaRoutes = require("../Routes/tecnicaRoutes.js");
const session = require("express-session");
const cors = require("cors");
const createDocument = require("./CreateTemplate.js");

const app = express();
app.use(bodyParser.json());

// Configuração do CORS
app.use(
  cors({
    origin: "http://localhost:5500",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// Configuração da sessão
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware para parsear o corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conectar ao banco de dados e iniciar o servidor
const connectDatabase = (async () => {
  await syncDatabase();
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi estabelecida com sucesso.");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
})();

app.post("/submit-form", (req, res) => {
  // Obter os dados do formulário do corpo da requisição
  const { nome, idade, altura, peso } = req.body;

  // Aqui você pode fazer o que quiser com os dados do formulário
  // Por exemplo, chamar a função createDocument com esses dados
  createDocument("TestModelo.docx", {
    Titulo: "RELATÓRIO DE ECOCARDIOGRAMA",
    nome: nome,
    idade: idade,
    altura: altura,
    peso: peso,
  });

  // Responder ao cliente
  res.send("Dados do formulário recebidos com sucesso!");
});

// Definir as rotas
app.use("/conclusao", conclusaoRoutes);
app.use("/tipoModelo", tipoModeloRoutes);
app.use("/comentario", comentarioRoutes);
app.use("/tecnica", tecnicaRoutes);
app.use("/observacao", observacaoRoutes);

module.exports = { connectDatabase };
