const Conclusao = require("../models/conclusao.js");

//get
exports.get = async (req, res) => {
  try {
    const conclusao = await Conclusao.findAll();
    res.json(conclusao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { conclusao_id } = req.params;

    const conclusao = await Conclusao.findByPk(conclusao_id);

    if (!conclusao) {
      return res.status(404).json({ error: "Conclusão não encontrado." });
    }

    res.json(conclusao);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

//post
exports.register = async (req, res) => {
  const { content, Id_model } = req.body;
  try {
    await Conclusao.create({
      content,
      Id_model,
    });
    res.status(201).json({ message: "Conclusao register successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//put
exports.update = async (req, res) => {
  const { conclusao_id } = req.params;
  const { content } = req.body;
  try {
    await Conclusao.update(
      {
        content,
      },
      { where: { Id_conc: conclusao_id } }
    );
    res.status(200).json({ message: "Conclusao updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Delete
exports.delete = async (req, res) => {
  const { conclusao_id } = req.params;
  const {} = req.body;
  try {
    await Conclusao.destroy({ where: { Id_conc: conclusao_id } });
    res.status(202).json({ message: "Conclusao deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
