import { createBaseDocument } from "../Services/createDocuments.js";

const create = (req, res) => {
  try {
    // Obter os dados do formulário do corpo da requisição
    const data = req.body;
    // Aqui você pode fazer o que quiser com os dados do formulário
    // Por exemplo, chamar a função createDocument com esses dados
    createBaseDocument(data);
    // Responder ao cliente
    res.send("Dados do formulário recebidos com sucesso!");
  } catch (error) {
    console.log(error)
    throw new Error("Erro ao criar documento!", error)
  }
}

export const documentController = {
  create
}