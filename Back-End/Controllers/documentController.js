import { createDocument } from "../Services/CreateTemplate.js";

const create = (req, res) => {
  try {
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
  } catch (error) {
    console.log(error)
    throw new Error("Erro ao criar documento!", error)
  }
}

export const documentController = {
  create
}