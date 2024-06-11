import Comentarios from "../models/comentario.js";

//get
export const get = async (_req, res) => {
  try {
    const comentario = await Comentarios.findAll();
    res.json(comentario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

export const findOne = async (req, res) => {
  try {
    const { comentario_id } = req.params;

    const comentario = await Comentarios.findByPk(comentario_id);

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
export const register = async (req, res) => {
  const { content, Id_model } = req.body;
  try {
    await Comentarios.create({
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
export const update = async (req, res) => {
  const { comentario_id } = req.params;
  const { content } = req.body;
  try {
    await Comentarios.update(
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
export const remove = async (req, res) => {
  const { comentario_id } = req.params;
  try {
    await Comentarios.destroy({ where: { Id_coments: comentario_id } });
    res.status(202).json({ message: "Comentario deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
