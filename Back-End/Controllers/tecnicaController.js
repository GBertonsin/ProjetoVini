import Tecnica from "../models/tecnica.js";

//get
export const get = async (_req, res) => {
  try {
    const tecnica = await Tecnica.findAll();
    res.json(tecnica);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro servidor." });
  }
};

export const findOne = async (req, res) => {
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
export const register = async (req, res) => {
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
export const update = async (req, res) => {
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
export const remove = async (req, res) => {
  const { tecnica_id } = req.params;
  try {
    await Tecnica.destroy({ where: { Id_tecn: tecnica_id } });
    res.status(202).json({ message: "Tecnica deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(501).json({ message: "Internal server error" });
  }
};
