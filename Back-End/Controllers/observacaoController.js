const Observacao = require("../models/observacao.js");

//get
exports.get = async (req, res) => {
  try {
    const observacao = await Observacao.findAll();
    res.json(observacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { observacao_id } = req.params;

    const observacao = await Observacao.findByPk(observacao_id);

    if (!observacao) {
      return res.status(404).json({ error: "Observação não encontrado." });
    }

    res.json(observacao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

//post
exports.register = async (req, res) => {
  const { content, Id_model } = req.body;
  try {
    await Observacao.create({
      content,
      Id_model,
    });
    res.status(201).json({ message: "Observacao register successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//put
exports.update = async (req, res) => {
  const { observacao_id } = req.params;
  const { content } = req.body;
  try {
    await Observacao.update(
      {
        content,
      },
      { where: { Id_obs: observacao_id } }
    );
    res.status(200).json({ message: "Observacao updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Delete
exports.delete = async (req, res) => {
  const { observacao_id } = req.params;
  const {} = req.body;
  try {
    await Observacao.destroy({ where: { Id_obs: observacao_id } });
    res.status(202).json({ message: "Observacao deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
