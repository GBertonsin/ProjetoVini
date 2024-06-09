const Tecnica = require("../models/tecnica.js");

//get
exports.get = async (req, res) => {
  try {
    const tecnica = await Tecnica.findAll();
    res.json(tecnica);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { tecnica_id } = req.params;

    const tecnica = await Tecnica.findByPk(tecnica_id);

    if (!tecnica) {
      return res.status(404).json({ error: "Tecnica não encontrado." });
    }

    res.json(tecnica);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

//post
exports.register = async (req, res) => {
  const { content, Id_model } = req.body;
  try {
    await Tecnica.create({
      content,
      Id_model,
    });
    res.status(201).json({ message: "Tecnica register successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//put
exports.update = async (req, res) => {
  const { tecnica_id } = req.params;
  const { content } = req.body;
  try {
    await Tecnica.update(
      {
        content,
      },
      { where: { Id_tecn: tecnica_id } }
    );
    res.status(200).json({ message: "Tecnica updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Delete
exports.delete = async (req, res) => {
  const { tecnica_id } = req.params;
  const {} = req.body;
  try {
    await Tecnica.destroy({ where: { Id_tecn: tecnica_id } });
    res.status(202).json({ message: "Tecnica deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
