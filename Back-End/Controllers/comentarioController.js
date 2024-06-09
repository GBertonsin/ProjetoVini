const Comentario = require("../models/comentario.js");

//get
exports.get = async (req, res) => {
  try {
    const comentario = await Comentario.findAll();
    res.json(comentario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { comentario_id } = req.params;

    const comentario = await Comentario.findByPk(comentario_id);

    if (!comentario) {
      return res.status(404).json({ error: "Comentário não encontrado." });
    }

    res.json(comentario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

//post
exports.register = async (req, res) => {
  const { content, Id_model } = req.body;
  try {
    await Comentario.create({
      content,
      Id_model,
    });
    res.status(201).json({ message: "Comentario register successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//put
exports.update = async (req, res) => {
  const { comentario_id } = req.params;
  const { content } = req.body;
  try {
    await Comentario.update(
      {
        content,
      },
      { where: { Id_coments: comentario_id } }
    );
    res.status(200).json({ message: "Comentario updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Delete
exports.delete = async (req, res) => {
  const { comentario_id } = req.params;
  const {} = req.body;
  try {
    await Comentario.destroy({ where: { Id_coments: comentario_id } });
    res.status(202).json({ message: "Comentario deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
