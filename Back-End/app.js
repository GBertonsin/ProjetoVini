import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import session from "express-session";
import comentarioRoutes from "./Routes/comentarioRoutes.js";
import conclusaoRoutes from "./Routes/conclusaoRoutes.js";
import documentRoutes from './Routes/documentRoutes.js';
import observacaoRoutes from "./Routes/observacaoRoutes.js";
import tecnicaRoutes from "./Routes/tecnicaRoutes.js";
import tipoModeloRoutes from "./Routes/tipoModeloRoutes.js";
import { connectDatabase } from './Services/connectDb.js';

export const app = express();
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
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware para parsear o corpo das requisições
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conectar ao banco de dados e iniciar o servidor
await connectDatabase()

// Definir as rotas
app.use("/conclusao", conclusaoRoutes);
app.use("/tipoModelo", tipoModeloRoutes);
app.use("/comentario", comentarioRoutes);
app.use("/tecnica", tecnicaRoutes);
app.use("/observacao", observacaoRoutes);
app.use('/documento', documentRoutes);
