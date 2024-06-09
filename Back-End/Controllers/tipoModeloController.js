const TipoModelo = require("../models/tipoModelo.js");
const Comentario = require("../models/comentario.js");
const Conclusoes = require("../models/conclusao.js");
const Tecnica = require("../models/tecnica.js");
const Observacao = require("../models/observacao.js");

//get
exports.get = async (req, res) => {
  try {
    const tipoModelo = await TipoModelo.findAll({
      include: [
        { model: Comentario, attributes: ["Id_coments", "content"] },
        { model: Conclusoes, attributes: ["Id_conc", "content"] },
        { model: Tecnica, attributes: ["Id_tecn", "content"] },
        { model: Observacao, attributes: ["Id_obs", "content"] },
      ],
    });
    res.json(tipoModelo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { tipoModelo_id } = req.params;

    const tipoModelo = await TipoModelo.findByPk(tipoModelo_id, {
      include: [
        { model: Comentario, attributes: ["Id_coments", "content"] },
        { model: Conclusoes, attributes: ["Id_conc", "content"] },
        { model: Tecnica, attributes: ["Id_tecn", "content"] },
        { model: Observacao, attributes: ["Id_obs", "content"] },
      ],
    });

    if (!tipoModelo) {
      return res.status(404).json({ error: "Tipo de modelo não encontrado." });
    }

    res.json(tipoModelo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

//post
exports.register = async (req, res) => {
  const { name } = req.body;
  try {
    await TipoModelo.create({
      name,
    });
    res.status(201).json({ message: "Tipo de Modelo register successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//put
exports.update = async (req, res) => {
  const { tipoModelo_id } = req.params;
  const { name } = req.body;
  try {
    await TipoModelo.update(
      {
        name,
      },
      { where: { Id_model: tipoModelo_id } }
    );
    res.status(200).json({ message: "Tipo de Modelo updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Delete
exports.delete = async (req, res) => {
  const { tipoModelo_id } = req.params;
  const {} = req.body;
  try {
    await TipoModelo.destroy({ where: { Id_model: tipoModelo_id } });
    res.status(202).json({ message: "tipoModelo deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
